import React, { Fragment, useEffect, useState } from "react";
import User from "../../utils/Stores/User";
import API from "../../utils/Stores/Cryptos/cryptoAPI";
import AppBar from "../../components/AppBar/AppBar";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });
  
  function createData(name, currentPrice, percentChange24, marketCap, availSupply, totalSupply) {
    return { name, currentPrice, percentChange24, marketCap, availSupply, totalSupply };
  }

  const handleBuy = (crypto) => {
      console.log(crypto);
  }

export default function(){

    
    const [cryptos, setCryptos] = useState([]);
    User.refreshOnLoad();
    const classes = useStyles();
    
    useEffect(() => {
        API.getCryptos()
            .then(res => {
                const newCryptos = [];
                console.log(res.data.data)
                for(let i =0; i<res.data.data.length; i++){
                    let data = createData(
                        res.data.data[i].name, 
                        res.data.data[i].quote.USD.price, 
                        res.data.data[i].quote.USD.percent_change_24h,
                        res.data.data[i].quote.USD.market_cap,
                        res.data.data[i].circulating_supply,
                        res.data.data[i].total_supply
                        )
                    newCryptos.push(data);
                    console.log(cryptos);
                }
                setCryptos(newCryptos);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <Fragment>
            <AppBar/>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Crypto</StyledTableCell>
                        <StyledTableCell align="center">Current Price</StyledTableCell>
                        <StyledTableCell align="center">% Change 24hrs</StyledTableCell>
                        <StyledTableCell align="center">Market Cap</StyledTableCell>
                        <StyledTableCell align="center">Available Supply</StyledTableCell>
                        <StyledTableCell align="center">Total Supply</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {cryptos.map(crypto => (
                        <StyledTableRow key={crypto.name}>
                            <StyledTableCell component="th" scope="row">
                                {crypto.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{crypto.currentPrice}</StyledTableCell>
                            <StyledTableCell align="center">{crypto.percentChange24}%</StyledTableCell>
                            <StyledTableCell align="center">${crypto.marketCap}</StyledTableCell>
                            <StyledTableCell align="center">{crypto.availSupply} {crypto.name}</StyledTableCell>
                            <StyledTableCell align="center">{crypto.totalSupply} {crypto.name}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button onClick={handleBuy}>Action</Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </Paper>
        </Fragment>
    )
}