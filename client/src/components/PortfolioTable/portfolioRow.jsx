import React, { Component } from "react";
import BuyButton from "../MarketTable/buyButton";
import { withStyles } from "@material-ui/core";
import { TableCell, TableRow } from "@material-ui/core"
import SellButton from "./sellButton"


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


class PortfolioRow extends Component {


    render() {
        return (
            <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                                {this.props.crypto.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{this.props.crypto.quantity}</StyledTableCell>
                            <StyledTableCell align="center">{this.props.crypto.currentPrice}</StyledTableCell>
                            <StyledTableCell align="center">{this.props.crypto.quantity * this.props.crypto.currentPrice} </StyledTableCell>
                            <StyledTableCell align="center">
                                <BuyButton crypto={this.props.crypto}/>
                                <SellButton crypto={this.props.crypto}/>
                            </StyledTableCell>
            </StyledTableRow>
        )
    }
}

export default PortfolioRow;