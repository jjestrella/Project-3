import React, { Component } from "react";
import { Paper, Table, TableBody } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PortfolioHead from "./portfolioHead";
import API from "../../utils/Stores/Cryptos/cryptoAPI";
import PortfolioRow from "../../components/PortfolioTable/portfolioRow";

const styles = (theme) => ({
    table: {
        minWidth: 700,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        border: '2px solid #000'
    },
});

const createData = (data) => {
    return {
        name: data.name,
        currentPrice: data.quote.USD.price,
        percentChange24: data.quote.USD.percent_change_24h,
        marketCap: data.quote.USD.market_cap,
        availSupply: data.circulating_supply,
        totalSupply: data.total_supply
    }
}

const holdingsData = (name, currentPrice, quantity) => {
    return {
        name,
        currentPrice,
        quantity
    }
}


class PortfolioTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            holdings: []
        };
    }

    componentDidMount() {
        // from api
        API.getCryptos()
            .then(res => {
                const newCryptos = [];
                console.log(res.data.data)
                for (let i = 0; i < res.data.data.length; i++) {
                    newCryptos.push(createData(res.data.data[i]));
                }
                return newCryptos;
            })
            .then(cryptoPrices => {
                // from database
                API.getCrypto()
                    .then(results => {
                        console.log(results);
                        const holdings = [];
                        console.log(cryptoPrices);
                        for (let i = 0; i < results.length; i++) {
                            for (let j = 0; j < cryptoPrices.length; j++) {
                                if (results[i].crypto === cryptoPrices[j].name) {
                                    holdings.push(holdingsData(results[i].crypto, cryptoPrices[j].currentPrice, results[i].quantity));
                                } 
                                
                            }
                        }
                        this.setState({holdings: holdings});
                        console.log(this.state.holdings);
                    }).catch(err => {
                        console.log(err);
                    })
            })
    }


    render() {
        return (
            <Paper className={this.props.classes.root}>
                <Table className={this.props.classes.table} aria-label="customized table">
                    <PortfolioHead />
                    <TableBody>
                    {this.state.holdings.map(crypto => (
                        <PortfolioRow crypto={crypto}/>   
                    ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default withStyles(styles)(PortfolioTable);