import React from 'react';
import accounting from 'accounting';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
  },
  price: {
    marginTop: '10px',
  },
  button: {
    marginTop: '2rem',
  },
}));

const Total = () => {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <h5>Total items: {basket?.length}</h5>
      <h5 className={classes.price}>
        $ {accounting.formatNumber(getBasketTotal(basket), '$')}
      </h5>
      <Link to="/checkout">
        <Button
          className={classes.button}
          variant="contained"
          color="secondary">
          Check Out
        </Button>
      </Link>
    </div>
  );
};

export default Total;
