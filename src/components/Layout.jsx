/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Nav from './Navigation';
import Footer from './Footer';
import 'normalize.css';
import Fonts from './Fonts';
import GlobalStyles from './styles/GlobalStyles';
import LayoutStyles from './styles/LayoutStyles';

const Layout = ({ children, title }) => (
  <>
    <GlobalStyles />
    <Fonts />
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <LayoutStyles>
      <Nav />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: null,
};

export default Layout;
