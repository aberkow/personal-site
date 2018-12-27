import React from 'react';
import styled from 'styled-components';

const WrapperStyles = styled.div`
  margin: 0 auto;
  max-width: 45em;
`

const ContentWrapper = (props) => (
  <WrapperStyles className='content-wrapper'>
    {props.children}
  </WrapperStyles>
)

export default ContentWrapper;