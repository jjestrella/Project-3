import React, { useEffect, Fragment } from "react";
import User from "../../../utils/Stores/User"
import API from "../../../utils/Stores/Cryptos/cryptoAPI"
import AppBar from "../../../components/AppBar/AppBar"

export default function(){
    User.refreshOnLoad();

    useEffect(() => {
        API.getCryptos()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // contructor(props) {
    //     super(props);

    //     const crytos = [];

        for (let i = 0; i < res.data.data.length; i++) {
            const data = createData(data.data.name, data.data.symbol, data.data.quote.USD.price, data.data.quote.USD.percent_change_24h, data.data.quote.USD.market_cap, data.data.circulating_supply, data.data.total_supply);
            
            res.data;
           
            rows.push(data);
            }
        }
    
    
    return(
        <Fragment>
            <AppBar/>
                <Container>
                    <Row>
                        <Col>
                        for (let i = 0; i < res.data.data.length; i++) {
                            const data = createData(data.data.name, data.data.symbol, data.data.quote.USD.price, data.data.quote.USD.percent_change_24h, data.data.quote.USD.market_cap, data.data.circulating_supply, data.data.total_supply);
            
            res.data;
           
            rows.push(data);
            }
        }
                        </Col>
                    </Row>
                    
                </Container>

        </Fragment>
    )
