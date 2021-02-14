import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/logo.png';
import { Badge, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '7rem',
  },
  appBar: {
    backgroundColor: 'whitesmoke',
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(3),
  },
  image: {
    marginRight: '10px',
    height: '2.5rem',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <Link to="/">
              <img src={logo} alt="logo" className={classes.image} />
            </Link>
          </IconButton>
          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p">
            Hello Guest
          </Typography>
          <div className={classes.button}>
            <Button variant="outlined">
              <strong>Sign In</strong>
            </Button>
            <Link to="checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCart fontSize="large" color="primary" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
