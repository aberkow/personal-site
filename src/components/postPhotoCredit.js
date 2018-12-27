import React, { Fragment } from 'react';
import styled from 'styled-components';

const CreditStyles = styled.p`
  margin: 2em 0;
`
const PhotoCredit = ({ link, name}) => (
  <Fragment>
    <code className="language-text">
      Photo By:
    </code>
    <CreditStyles>
      <a href={link}>{name}</a>
    </CreditStyles>
  </Fragment>
)

export default PhotoCredit