import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

const MainContainer = styled.div`
  background-color: ${props => props.theme.white};
  .background-teal {
    background-color: ${props => props.theme.teal};
  }
  .empty {
    font-weight: normal;
    -webkit-text-fill-color: ${props => props.theme.white};
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${props => props.theme.darkRed};  
  }
  .font-teal {
    color: ${props => props.theme.teal};
  } 
`

const MainStyles = styled.main`
  font-family: ${props => props.theme.sansSerif};
  max-width: 75em;
  margin: 0 auto;
  padding: 0 1em;
`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
    this.menuClickHandler = this.menuClickHandler.bind(this);
    this.menuEscape = this.menuEscape.bind(this);
  }
  menuClickHandler(evt) {
    if (evt.target.id === 'main-nav-toggle') {
      this.setState({
        isMenuOpen: !this.state.isMenuOpen
      })
    } else {
      this.setState({
        isMenuOpen: false
      })
    }
  }
  menuEscape(evt) {
    if (evt.keyCode === 27 && this.state.isMenuOpen === true) {
      this.setState({
        isMenuOpen: !this.state.isMenuOpen
      })
    }
  }
  render() {
    return (
      <MainContainer
        onChange={this.test}
        onKeyDown={this.menuEscape}
        onClick={this.menuClickHandler}>
        <Header 
          isMenuOpen={this.state.isMenuOpen} 
          page={this.props.page} />
        <MainStyles id='content'>
          {this.props.children}
        </MainStyles>
        <Footer page={this.props.page} />
      </MainContainer>
    )
  }
}

export default Main