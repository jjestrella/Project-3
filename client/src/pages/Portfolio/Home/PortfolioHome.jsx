import React, { useEffect, Fragment } from "react";
import User from "../../../utils/Stores/User";
import API from "../../../utils/Stores/Cryptos/cryptoAPI";
import AppBar from "../../../components/AppBar/AppBar";
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button  from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField"
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
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
  }));

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

function createData(name, quantity, value, boughtSold, change) {
    return { name, quantity, value, boughtSold, change };
  }

// map through the info we get back from the database and create a row for each
const rows = [
createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
createData('Eclair', 262, 16.0, 24, 6.0),
createData('Cupcake', 305, 3.7, 67, 4.3),
createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function(){
    User.refreshOnLoad();
    const classes = useStyles();
    const [{user}] = User.useContext();
    
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        API.getCryptos()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return(
        <Fragment>
            <AppBar/>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Portfolio Value: (import from db)
                </Typography>
                <Typography  variant="h6" component="h3">
                    Unspent: ${user.spending_cash}
                </Typography>
                <Link to="/market">
                    <Button variant="contained" color="primary">Market</Button>
                </Link>
            </Paper>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Crypto</StyledTableCell>
                        <StyledTableCell align="center">Quantity</StyledTableCell>
                        <StyledTableCell align="center">Value</StyledTableCell>
                        <StyledTableCell align="center">Total Bought/Sold</StyledTableCell>
                        <StyledTableCell align="center">Change</StyledTableCell>
                        <StyledTableCell align="center">Buy/Sell</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                            <StyledTableCell align="center">{row.value}</StyledTableCell>
                            <StyledTableCell align="center">{row.boughtSold}</StyledTableCell>
                            <StyledTableCell align="center">{row.change}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button onClick={handleOpen} color= "primary" size="small" aria-label="small outlined button group">Buy</Button>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    open={open}
                                    onClose={handleClose}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                    timeout: 500,
                                    }}
                                >
                                    <Fade in={open}>
                                    <div className={classes.paper}>
                                       <Table className={classes.table} aria-label="customized table">
                                       <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Crypto</StyledTableCell>
                                                <StyledTableCell align="center">Quantity</StyledTableCell>
                                                <StyledTableCell align="center">Value</StyledTableCell>
                                                <StyledTableCell align="center">Total</StyledTableCell>
                                                <StyledTableCell align="center">Buy</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <StyledTableRow>
                                                {/* when you click buy it doesnt use the correct name of the row */}
                                                <StyledTableCell>{row.name}</StyledTableCell>
                                                <StyledTableCell align="center">
                                                    <TextField type="number" id="standard-basic" label="Quantity" />
                                                </StyledTableCell>
                                                <StyledTableCell align="center">price</StyledTableCell>
                                                <StyledTableCell align="center">Total: </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    <Button color= "primary" size="small" aria-label="small outlined button group">Buy</Button>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        </TableBody>
                                       </Table>

                                    </div>
                                    </Fade>
                                </Modal>
                                <Button color= "primary" size="small" aria-label="small outlined button group">Sell</Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </Paper>
            
        </Fragment>
    )
}