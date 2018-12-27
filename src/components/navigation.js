import React from 'react';
import styled from 'styled-components';

import NavigationLinks from './navigationLinks';

const Nav = styled.nav`
  display: flex;
  position: relative;
  font-family: ${props => props.theme.sansSerif};
`

const NavButton = styled.button`
  background-color: ${props => props.theme.darkRed};
  border: 1px solid ${props => props.theme.darkRed};
  color: ${props => props.theme.white};
  clip-path: polygon(0 0%,100% 0%,0% 100%,0% 100%);
  font-size: 1.3em;
  height: 100px;
  position: relative;
  width: 100px;
  z-index: 20;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.lightRed};
    border: 1px solid ${props => props.theme.lightRed}; 
  }
  span {
    pointer-events: none;
    position: absolute;
    top: 17px;
    left: 5px;
    transform: rotate(-45deg);
  }
`;

const NavList = styled.ul`
  background-color: ${props => props.theme.mediumRed};
  border: 1px solid ${props => props.theme.mediumRed};
  height: 100vh;
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: 120px;
  position: absolute;
  top: 0;
  width: 100px;
  a {
    color: white;
    text-decoration: none;
    font-size: 1.3em;
    width: 100%;
    display: inline-block;
    padding-left: 0.7em;
    padding: 1em 0 1em 0.7em;
    &:hover,
    &:focus {
      background-color: ${props => props.theme.teal};
      color: ${props => props.theme.white};
    }
  }
`

const Navigation = ({ isMenuOpen }) => {
  const buttonText = isMenuOpen ? 'Close' : 'Menu';
  const display = isMenuOpen ? 'block' : 'none';
  return (
    <Nav>
      <NavButton id="main-nav-toggle">
        <span>{buttonText}</span>
      </NavButton>
      <NavList style={{display}}>
        <NavigationLinks />
      </NavList>
    </Nav>
  )
}

export default Navigation;