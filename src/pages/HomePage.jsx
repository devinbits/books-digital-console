import React from 'react';
import PropTypes from 'prop-types';
import { Header, SideMenu, Page } from 'components/common';

const HomePage = (props) => {
  return (
    <Page Header={Header} SideMenu={SideMenu}>
      <h1>Hello</h1>
    </Page>
  );
};

HomePage.propTypes = {};

export default HomePage;
