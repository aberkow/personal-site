import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const IndexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  h1 {
    font-size: 3em;
    font-weight: normal;
    grid-column: 1 / 5;
    grid-row: 3 / 4;
    margin-top: 1.5em;
  }
  span {
    border-top: 4px solid ${props => props.theme.lightRed};
    display: block;
    margin-top: 0.5em;
    padding-top: 0.5em;
  }
  p {
    grid-column: 1 / 4;
    font-size: 4em;
    margin: 0;
    grid-column: 1 / 4;
    margin: 0.3em 0;
    font-weight: bolder;
  }

  @media screen and (min-width: ${props => props.theme.tablet}) {
    p {
      font-size: 6em;
    }
  }

  @media screen and (min-width: ${props => props.theme.desktop}) {
    p {
      font-size: 8em;
      grid-column: 2 / 5;
    }
  }
`

const Index = () => (
  <Layout>
    <IndexContainer className="index-container">
      <h1>Adam Berkowitz <span className="font-teal">Web Developer</span></h1>
      <p className="empty">Say Little.</p>
      <p className="font-teal">Do Much.</p>
    </IndexContainer>
  </Layout>
)

export default Index;