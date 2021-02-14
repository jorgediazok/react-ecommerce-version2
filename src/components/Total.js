import React from 'react';
import accounting from 'accounting';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
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
      <h5>{accounting.formatNumber(getBasketTotal(basket), '$')}</h5>
      <Button className={classes.button} variant="contained" color="secondary">
        Check Out
      </Button>
    </div>
  );
};

export default Total;
