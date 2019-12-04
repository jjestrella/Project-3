import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import User from "../../utils/Stores/User";
import API from "../../utils/Stores/Cryptos/cryptoAPI";
import APIUser from "../../utils/Stores/User/UserAPI";


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            width: 200,
        },
    },
}));

function BuyForm(props) {
    User.refreshOnLoad();

    const [{ user }] = User.useContext();
    const classes = useStyles();

    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const handleInputChange = (e) => {
        e.preventDefault();
        setQuantity(e.target.value);
        setTotal(props.crypto.currentPrice * e.target.value);
    }

    function sellCrypto(crypto, quantity, UserId) {
        API.sellCrypto({
            crypto,
            quantity,
            UserId
        }).then(crypto => {
            console.log(crypto);
        }).catch(err => {
            console.log(err);
        });
    }

    function deleteCrypto(crypto) {
        API.delCrypto({
            crypto
        }).then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
    }

    function setUserTotal(total) {
        APIUser.setTotal({ total })
            .then(result => {
                console.log(result)
            }).catch(err => {
                console.log(err);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        console.log(props.crypto.name);
        console.log(quantity);
        console.log(total);
        console.log(props.crypto.quantity);

        if (quantity > props.crypto.quantity) {
            console.log("you dont own that many!");
            return;
        } else if (quantity == props.crypto.quantity) {
            let newTotal = user.spending_cash + total;
            console.log(newTotal);
            setUserTotal(newTotal);
            deleteCrypto(props.crypto.name);
        } else {
            let newTotal = user.spending_cash + total;
            console.log(newTotal);
            sellCrypto(props.crypto.name, quantity, user.id);
            setUserTotal(newTotal);
        }
    }

    return (
        <Fragment>
            <h2 id="transition-modal-title">Market</h2>
            <p id="transition-modal-description">Sell {props.crypto.name}</p>
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField
                    label="Quantity"
                    id="outlined-size-normal"
                    variant="outlined"
                    type="number"
                    onChange={handleInputChange}
                />
                <TextField
                    label="Price"
                    id="outlined-size-normal"
                    defaultValue={props.crypto.currentPrice}
                    variant="outlined"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    label="Total"
                    id="outlined-size-normal"
                    value={total}
                    variant="outlined"
                    onChange={handleInputChange}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <Button type="submit" variant="contained" color="primary">Sell</Button>
            </form>
        </Fragment>
    )
}


export default BuyForm;