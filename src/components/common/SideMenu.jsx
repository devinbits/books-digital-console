import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    backgroundColor: '#253053',
  },
});

const SideMenu = () => {
  const classes = useStyles();
  return <div className={classes.sideMenu}></div>;
};

export default SideMenu;
