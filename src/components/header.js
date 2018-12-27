import React from 'react'
import styled from 'styled-components';
import SkipLink from './skipLink';

import Navigation from './navigation';

const HeaderStyle = styled.header`
  display: inline-block;
  position: sticky;
  top: 0;
  z-index: 100;
`

const Header = ({ isMenuOpen }) => (
  <HeaderStyle>
    <SkipLink />
    <Navigation isMenuOpen={isMenuOpen} />
  </HeaderStyle>
)

export default Header
