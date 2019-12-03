import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import User from "../../utils/Stores/User";
import API from "../../utils/Stores/Cryptos/cryptoAPI";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      width: 200,
    },
  },
}));

function BuyForm(props) {
  
  const [{user}] = User.useContext();
  const classes = useStyles();
  const history = useHistory();

  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const handleInputChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
    setTotal(props.crypto.currentPrice * e.target.value);
  }

  function setCrypto(crypto, quantity, UserId){
    API.setCrypto({
      crypto,
      quantity,
      UserId
    }).then(crypto => {
      console.log(crypto)
      history.push("/portfoliohome");
    }).catch(err => {
      console.log(err);
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(props.crypto.name);
    console.log(quantity);

    if(user.spending_cash<total || quantity===0){
      console.log("costs too much or no quantity");
      return;
    }else{
      setCrypto(props.crypto.name, quantity, user.id);
    }

    
  }
  
        return (
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
            <Button type="submit" variant="contained" color="primary">Buy</Button>
        </form>
        )
    }

export default BuyForm;