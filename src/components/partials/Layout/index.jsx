import React from 'react';
import PropTypes from 'prop-types';

import * as classes from './index.module.scss';

function Layout({ children }) {
  return (
    <main className={classes.layout}>
      {children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
