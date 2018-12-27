import React from 'react';
import styled from 'styled-components';

import NavigationLinks from './navigationLinks';
import Decoration from './decoration';
import FooterLinks from './footerLinks';

const FooterStyles = styled.footer`
  background-color: ${props => props.theme.darkRed};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, auto);
  margin-top: 9em;
  padding: 1em;
  > ul {
    grid-column: 7 / 12;
  }
  ul {
    color: ${props => props.theme.white};
    display: flex;
    flex-direction: column;
    font-family: ${props => props.theme.sansSerif};
    justify-content: center;
    list-style-type: none;
    padding: 0;
  }
  nav {
    grid-column: 1 / 5;
    margin-right: 1em;
  }
  span {
    margin-bottom: 0.5em;
    margin-right: 0.5em;
  }
  a {
    border: 1px solid ${props => props.theme.white};
    color: ${props => props.theme.white};
    display: block;
    padding: 1em;
    text-decoration: none;
    &:after {
      border-bottom: none;
    }
    &:hover,
    &:focus {
      background-color: ${props => props.theme.teal};
    }
  }
  @media screen and (min-width: ${props => props.theme.desktop}) {
    transform: skew(-45deg);
    > ul,
    nav {
      transform: skew(45deg);
    }
    > ul {
      grid-column: 4 / 11;
      grid-row: 2 / 3;
    }
    nav {
      grid-column: 1 / 6;
      grid-row: 1 / 2;
    }
    ul {
      align-items: center;
      flex-direction: row;
    }
    li + li {
      margin-left: 2em;
    }
  }
`

const Footer = () => (
  <FooterStyles>
    <FooterLinks />
    <nav>
      <ul>
        <NavigationLinks />
      </ul>
    </nav>
    <Decoration location="footer" height="100%" />
  </FooterStyles>
)

export default Footer;