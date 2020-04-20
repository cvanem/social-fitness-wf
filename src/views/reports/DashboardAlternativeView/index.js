import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import CustomerActivity from './CustomerActivity';
import EarningsSegmentation from './EarningsSegmentation';
import FinancialStats from './FinancialStats';
import Header from './Header';
import LatestOrders from './LatestOrders';
import MostProfitableProducts from './MostProfitableProducts';
import Overview from './Overview';
import TopReferrals from './TopReferrals';
import TopReferrals2 from './TopReferrals2';
import TopReferrals3 from './TopReferrals3';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64
    }
  }
}));

function DashboardAlternativeView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Lead Nurture Dashboard">
      <Container maxWidth={false} className={classes.container}>
        <Header />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Overview />
          </Grid>
          <Grid item lg={3} xs={12}>
            <TopReferrals />
          </Grid>
          <Grid item lg={3} xs={12}>
            <TopReferrals2 />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TopReferrals3 />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardAlternativeView;
