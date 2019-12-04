import React, { Component } from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";
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

class PortfolioHead extends Component {

    render() {
        return (
            <TableHead>
                <TableRow>
                    <StyledTableCell>Crypto</StyledTableCell>
                    <StyledTableCell align="center">Quantity</StyledTableCell>
                    <StyledTableCell align="center">Current Price</StyledTableCell>
                    <StyledTableCell align="center">Value</StyledTableCell>
                    <StyledTableCell align="center">Buy/Sell</StyledTableCell>
                </TableRow>
            </TableHead>
        )
    }
}

export default PortfolioHead;