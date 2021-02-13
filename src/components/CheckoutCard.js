import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Delete } from '@material-ui/icons';
import accounting from 'accounting';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: '1rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  cardRating: {
    display: 'flex',
  },
}));

export default function CheckoutCard({ product }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {};

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant="h5"
            color="textSecondary">
            {accounting.formatMoney(product.price, '$')}
          </Typography>
        }
        title="Nike Shoes"
        subheader="in Stock"
      />
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />

      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <IconButton>
          <Delete fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
