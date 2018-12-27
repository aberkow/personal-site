import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;
`

const PostPagination = ({ next, prev }) => (
  <Fragment>
    <code className="language-text">Read More Articles:</code>
    <PaginationStyles>
      {
        prev && <Link to={`blog/${prev.slug}`}>{prev.title}</Link>
      }
      {
        next && <Link to={`blog/${next.slug}`}>{next.title}</Link>
      }
    </PaginationStyles>
  </Fragment>
)

export default PostPagination;