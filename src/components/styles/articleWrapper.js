import styled from 'styled-components';

const ArticleWrapper = styled.div`
  padding: 0 1em 4em 1em;
  position: relative;
  border: 4px solid ${props => props.theme.darkRed};
  border-top: 0;
  h1 {
    font-size: 3em;
  }
  article {
    font-family: ${props => props.theme.serif};
    font-size: 1.3em;
    line-height: 1.8;
    code {
      font-family: ${props => props.theme.mono};
      line-height: 1.8;
    }
  }
`

export default ArticleWrapper