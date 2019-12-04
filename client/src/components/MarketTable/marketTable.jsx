import React, { Component } from "react";
import { Table, TableBody } from "@material-ui/core";
import API from "../../utils/Stores/Cryptos/cryptoAPI";
import MarketHead from "./marketHead";
import MarketRow from "./marketRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
};

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

class MarketTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptos: []
        };
      }

    componentDidMount() {
        console.log(this.props);
        API.getCryptos()
            .then(res => {
                const newCryptos = [];
                console.log(res.data.data)
                for(let i =0; i<res.data.data.length; i++){
                    newCryptos.push(createData(res.data.data[i]));
                }
                
                this.setState({cryptos: newCryptos});
                console.log(this.state);

            })
            .catch(err => {
                console.log(err)
        })
    }

    render() {
        return(
            
            <Paper className={this.props.classes.root}>
                <Table className={this.props.classes.table} aria-label="customized table">
                    <MarketHead/>
                    <TableBody>
                    {this.state.cryptos.map(crypto => (
                        <MarketRow crypto={crypto}/>   
                    ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
    
}

export default withStyles(styles)(MarketTable);