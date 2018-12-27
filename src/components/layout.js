import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider, injectGlobal } from 'styled-components';

import Main from './main';

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    background-color: rgb(71, 41, 67);
    margin: 0;
    overflow-x: hidden;
  }
  a {
    color: rgb(49, 27, 46);
    font-weight: bold;
    position: relative;
    text-decoration: none;
  }
  a:before {
    content: '';
    position: absolute;
    border: 1px solid transparent;
    width: 0;
    bottom: -2px;
  }
  a:hover::before,
  a:focus::before {
    width: 100%;
  }
  a::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -2px;
    left: 0;
    transition: all 0.5s ease-in-out;
    border-bottom: 2px solid rgb(34, 119, 152);
  }
  a:hover::after,
  a:focus::after {
    border-bottom: 2px solid ${props => props.theme.white};
    width: 0;
  }
  .screen-reader {
    position: absolute;
    left: 9999px;
  }
`

const theme = {
  baseFontSize: '1.3em',
  darkRed: 'rgb(49, 27, 46)',
  mediumRed: 'rgb(71, 41, 67)',
  lightRed: 'rgb(100, 79, 98)',
  teal: 'rgb(34, 119, 152)',
  white: '#fdfbfb',
  sansSerif: 'IBM Plex Sans, sans-serif',
  serif: 'IBM Plex Serif',
  mono: 'IBM Plex Mono',
  tablet: '48em',
  desktop: '62em'
}

const Layout = ({ page, children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Fragment>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Adam Berkowitz - Web Developer' },
              { name: 'keywords', content: 'web development, coding, javascript, wordpress, php, docker' },
            ]}
          >
          <html lang="en" />
          </Helmet>
          <ThemeProvider theme={theme}>
          {/* 
            Wrap everything in the theme provider
          */}
            <Main page={page} children={children} />
          </ThemeProvider>
        </Fragment>
    )}
  />
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
