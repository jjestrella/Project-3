import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const styles = (theme) => ({
    root: {
      '& .MuiTextField-root': {
        width: 200,
      },
    },
  });


class BuyForm extends Component {


    render(){
        return (
        <form className={this.props.classes.root} noValidate autoComplete="off">
            <TextField
                label="Quantity"
                id="outlined-size-normal"
                variant="outlined"
                type="number"
            />
            <TextField
                label="Price"
                id="outlined-size-normal"
                defaultValue={this.props.crypto.currentPrice}
                variant="outlined"
                InputProps={{
                    readOnly: true,
                  }}
            />
            <TextField
                label="Total"
                id="outlined-size-normal"
                defaultValue="Total"
                variant="outlined"
            />
            <Button variant="contained" color="primary">Buy</Button>
        </form>
        )
    }
}

export default withStyles(styles)(BuyForm);