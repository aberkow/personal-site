import styled from 'styled-components';

const ClipStyle = styled.div`
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 100px;
  height: 100px;
  clip-path: polygon(100% 0,0% 100%,100% 100%);
  background-color: ${props => props.theme.white};
  z-index: 10;
`

export default ClipStyle;