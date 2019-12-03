import React, { Component } from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

class MarketHead extends Component {

    render() {
        return(
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
        )
    }
}

export default MarketHead;