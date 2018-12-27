import React from 'react';
import styled from 'styled-components';

const SkipLinkStyle = styled.a`
  position: absolute;
  left: 99999px;
  padding: 1em;
  border: 1px solid;
  &:focus {
    left: 0;
  }
`;

const SkipLink = () => (
  <SkipLinkStyle href="#content">Skip to content</SkipLinkStyle>
);

export default SkipLink;