import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from '@material-ui/core/styles';
import BuyButton from "./buyButton";

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

class MarketRow extends Component {
    crypto = this.props.crypto;
    render(){
        return (
                <StyledTableRow key={this.crypto.name}>
                    <StyledTableCell component="th" scope="row">
                        {this.crypto.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{this.crypto.currentPrice}</StyledTableCell>
                    <StyledTableCell align="center">{this.crypto.percentChange24}%</StyledTableCell>
                    <StyledTableCell align="center">${this.crypto.marketCap}</StyledTableCell>
                    <StyledTableCell align="center">{this.crypto.availSupply} {this.crypto.name}</StyledTableCell>
                    <StyledTableCell align="center">{this.crypto.totalSupply} {this.crypto.name}</StyledTableCell>
                    <StyledTableCell align="center">
                        <BuyButton crypto={this.crypto}/>
                    </StyledTableCell>
                </StyledTableRow>
        )
    }
}

export default MarketRow;