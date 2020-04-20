import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles,
  Grid,
  Button
} from '@material-ui/core';
import GenericMoreButton from 'src/components/GenericMoreButton';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Label from 'src/components/Label';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  avatar: {
    fontSize: 12,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white
  }
}));

function TopReferrals3({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [referrals, setReferrals] = useState(null);

  const getReferrals = useCallback(() => {
    axios.get('/api/reports/top-referrals').then(response => {
      if (isMountedRef.current) {
        setReferrals(response.data.referrals);
      }
    });
  }, [isMountedRef]);

  useEffect(() => {
    getReferrals();
  }, [getReferrals]);

  if (!referrals) {
    return null;
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Past Appointments" />
      <Divider />
      <List disablePadding>
        {referrals.map((referral, i) => (
          <ListItem
            style={{ height: 72 }}
            divider={i < referrals.length - 1}
            key={referral.name}
          >
            <ListItemAvatar style={{ maxWidth: 96 }}>
              <Grid container alignItems="center">
                <Grid item container xs={12}>
                  <Label className={classes.labelTotal} color="primary">
                    Apr 1st
                  </Label>
                </Grid>
                <Grid item container xs={12}>
                  10:00 AM
                </Grid>
              </Grid>
            </ListItemAvatar>
            <ListItemText
              primary={referral.name}
              secondary={referral.phone}
              primaryTypographyProps={{ noWrap: true, variant: 'h6' }}
              secondaryTypographyProps={{ noWrap: true, variant: 'h6' }}
            />
            <Typography variant="body2" color="textSecondary">
              {referral.value}
            </Typography>
            <Grid
              container
              style={{ maxWidth: 240 }}
              alignItems="center"
              justify="flex-end"
              spacing={2}
            >
              <Grid item>
                <Button size="small" variant="contained" color="primary">
                  Showed
                </Button>
              </Grid>
              <Grid>
                <Button size="small" variant="outlined" color="error">
                  No Show
                </Button>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

TopReferrals3.propTypes = {
  className: PropTypes.string
};

export default TopReferrals3;
