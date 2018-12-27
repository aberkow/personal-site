import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const B = styled.b`
  background-color: green;
  display: block;
  filter: hue-rotate(90deg);
  transition: opacity 0.45s ease-in-out;
  @media screen and (min-width: ${props => props.theme.desktop}) {
    height: 9em;
  }
`;

class Decoration extends Component {
  changeOpacity = () => {
    setTimeout(() => {
      const b = document.querySelectorAll('b');
      const selected = b[Math.floor(Math.random() * 10)];
      selected.style.opacity = Math.floor(Math.random() * 10 + 1) / 10;
      this.changeOpacity();
    }, 500)
  }
  componentDidMount() {
    this.changeOpacity();
  }
  render() {
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => {
    const opacity = Math.floor(Math.random() * 10 + 1) / 10;
    return <B key={n} 
      id={`${this.props.location}-decoration-${n}`}
      style={{ opacity, height: this.props.height }}
      ></B>
    })
    return (
      <Fragment>
        {items}
      </Fragment>
    )
  }
}

export default Decoration;
