import React from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Badge,
  IconButton,
} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LogoutIcon from '@material-ui/icons/ExitToApp';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid>
            <Typography>Title</Typography>
          </Grid>
          <Grid item sm />  {/* This will take all empty space like flex:1 */}
          <Grid>    {/* This will take width of child */}
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <AccountCircleIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <LogoutIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
