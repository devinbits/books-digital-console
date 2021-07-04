import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    display: 'flex',
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  body: {
    height: '100%',
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row',
  },
});

const Page = ({ Header, SideMenu, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {Header && <Header />}
      <div className={classes.body}>
        {SideMenu && <SideMenu />}
        {children}
      </div>
    </div>
  );
};

export default Page;
