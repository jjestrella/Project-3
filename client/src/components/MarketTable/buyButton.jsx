import React, { Component, Fragment } from "react";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles"
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import BuyForm from "./buyForm";


const styles = (theme) => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    table: {
        minWidth: 700,
      },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing( 2 , 25, 4),
      },
  });

class BuyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
      }

    handleOpen = () => {
        this.setState({isOpen: true});
    };
    
    handleClose = () => {
        this.setState({isOpen: false});
    };

    render(){
        return (
            <Fragment>
            <Button onClick={this.handleOpen}>Buy</Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={this.props.classes.modal}
                    onClose={this.handleClose}
                    open={this.state.isOpen}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={this.state.isOpen}>
                    <div className={this.props.classes.paper}>
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                        <BuyForm crypto={this.props.crypto}/>
                    </div>
                    </Fade>
                </Modal>
            </Fragment>
        )
    }
}

export default withStyles(styles)(BuyButton);