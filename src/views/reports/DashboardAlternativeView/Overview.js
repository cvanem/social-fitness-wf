import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Card,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Label from 'src/components/Label';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginLeft: theme.spacing(1)
  }
}));

function Overview({ className, ...rest }) {
  const classes = useStyles();
  const overview = {
    income: '854,355.00',
    expanses: '373,250.50',
    profit: '123,532.00',
    subscriptions: '26,000'
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
      >
          <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography variant="h1">
            21
          </Typography>
          <div className={classes.valueContainer}>
            <Typography
              variant="h3"
              color="textPrimary"
              gutterBottom
            >              
              Signups
            </Typography>            
          </div>
          <div className={classes.valueContainer}>
          <Label
              className={classes.label}
              color="primary"
            >
              Last 30 Days
            </Label>
            </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography            
            variant="h1"
            
          >
            19
          </Typography>
          <div className={classes.valueContainer}>
            <Typography
              variant="h3"
              color="textPrimary"
              gutterBotton
            >              
              Leads
            </Typography>            
          </div>
          <div className={classes.valueContainer}>
          <Label
              className={classes.label}
              color="primary"
            >
              Last 14 Days
            </Label>
            </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography

            variant="h1"
            
          >
            8
          </Typography>
          <div className={classes.valueContainer}>
            <Typography
              variant="h3"
              color="textPrimary"
              
              gutterBottom
            >              
              Appts
            </Typography>            
          </div>
          <div className={classes.valueContainer}>
          <Label
              className={classes.label}
              color="success"
            >
              Next 7 Days
            </Label>
            </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography variant="h1">
            314
          </Typography>
          <div className={classes.valueContainer}>
            <Typography
              variant="h3"
              color="textPrimary"
              gutterBottom
            >              
              Leads
            </Typography>            
          </div>
          <div className={classes.valueContainer}>
          <Label
              className={classes.labelTotal}
              color="success"
            >
              Total
            </Label>
            </div>
        </Grid>
       
      </Grid>
    </Card>
  );
}

Overview.propTypes = {
  className: PropTypes.string
};

export default Overview;
