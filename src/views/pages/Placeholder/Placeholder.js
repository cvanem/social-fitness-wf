import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Page from 'src/components/Page';

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
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography>Placeholder</Typography>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardAlternativeView;
