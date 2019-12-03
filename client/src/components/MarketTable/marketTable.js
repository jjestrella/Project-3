import React, { Component, Fragment } from "react";
import { Table } from "@material-ui/core";
import API from "../../utils/Stores/Cryptos/cryptoAPI";
import MarketHead from "./marketHead";
import MarketRow from "./marketRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

class MarketTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptos: []
        };
      }

    componentDidMount() {
        API.getCryptos()
            .then(res => {
                const newCryptos = [];
                console.log(res.data.data)
                for(let i =0; i<res.data.data.length; i++){
                    newCryptos.push(res.data.data[i]);
                }
                this.setState(newCryptos);
            })
            .catch(err => {
                console.log(err)
        })
    }
    classes = useStyles();

    render() {
        return(
            
            <Paper className={this.classes.root}>
                <Table className={this.classes.table} aria-label="customized table">
                    <MarketHead/>
                    {this.state.cryptos.map(crypto => (
                        <MarketRow crypto={crypto}/>   
                    ))}
                </Table>
            </Paper>
        )
    }
    
}

export default MarketTable;