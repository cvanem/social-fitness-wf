/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Grid,
  Avatar,
  Box,
  Chip,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Typography,
  makeStyles
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import {
  Briefcase as BriefcaseIcon,
  Calendar as CalendarIcon,
  ShoppingCart as ShoppingCartIcon,
  Folder as FolderIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  UserPlus as UserPlusIcon,
  Shield as ShieldIcon,
  AlertCircle as AlertCircleIcon,
  Trello as TrelloIcon,
  User as UserIcon,
  Layout as LayoutIcon,
  Edit as EditIcon,
  DollarSign as DollarSignIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  PieChart as PieChartIcon,
  Share2 as ShareIcon,
  Users as UsersIcon
} from 'react-feather';
import Logo from 'src/components/Logo';
import NavItem from './NavItem';

const navConfig = [
  {
    subheader: 'Navigation',
    items: [
      {
        title: 'Lead Nurture Dashboard',
        icon: LayoutIcon,
        href: '/app/dashboard'
      },
      {
        title: 'People',
        icon: ShareIcon,
        href: '/app/table'
      },
      {
        title: 'Reporting',
        icon: TrelloIcon,
        href: '/app/reporting'
      },
      {
        title: 'Users',
        icon: UsersIcon,
        href: '/app/Users'
      },
      {
        title: 'Stripe Dashboard',
        icon: DollarSignIcon,
        href: '/app/stripe'
      }
    ]
  }
];

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth = 0 }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles(theme => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 56,
    height: 56
  },
  logoContainer: {
    background: theme.palette.primary.main
  }
}));

function NavBar({ openMobile, onMobileClose }) {
  const classes = useStyles();
  const location = useLocation();
  const { user } = useSelector(state => state.account);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box
            p={2}
            display="flex"
            className={classes.logoContainer}
            justifyContent="center"
          >
            <RouterLink to="/">
              <Logo />
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <Grid container spacing={2}>
              <Grid item>
                <RouterLink to="/app/account">
                  <Avatar alt="User" className={classes.avatar} />
                </RouterLink>
              </Grid>
              <Grid item>
                <Box mt={1}>
                  <Link
                    component={RouterLink}
                    to="/app/account"
                    variant="h5"
                    color="textPrimary"
                    underline="none"
                  >
                    {`${user.firstName} ${user.lastName}`}
                  </Link>
                  <Typography variant="body2" color="textSecondary">
                    {user.bio}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Divider />
        <Box p={2}>
          {navConfig.map(config => (
            <List
              key={config.subheader}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {config.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: config.items,
                pathname: location.pathname
              })}
            </List>
          ))}
        </Box>
        <Divider />
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
