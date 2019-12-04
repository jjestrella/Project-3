import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import User from "../../utils/Stores/User"
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


const { USER_LOADING, SET_USER } = User.actions;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavAppBar() {
  const classes = useStyles();

  const [{ user }, userDispatch] = User.useContext();
  function logout() {
    userDispatch({ type: USER_LOADING });
    User.API.logout().then(user => {
        userDispatch({ type: SET_USER, user });
    });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {!user.email && (
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                BCS Crypto
                </Typography>
                <Button href= "/signup" color="inherit">Signup</Button>
                <Button href= "/login" color="inherit">Login</Button>
          </Toolbar>
        )}
        {user.email && (<Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button href="/portfoliohome" color="inherit">BCS Crypto</Button>
          </Typography>
          <Button onClick={logout} color="inherit">Logout</Button>
        </Toolbar>)}
      </AppBar>
    </div>
  );
}