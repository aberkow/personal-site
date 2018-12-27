import React, { Fragment } from 'react';
import styled from 'styled-components';

const ListStyles = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 2em 0;
  li + li {
    margin-top: 0.7em;
  }
`

const PostTags = ({ tags }) => {
  const tagItems = tags.sort((a, b) => {
    const slugA = a.taxonomySlug || a.node.taxonomySlug;
    const slugB = b.taxonomySlug || b.node.taxonomySlug;
    if (slugA < slugB) {
      return -1
    } else if (slugA > slugB) {
      return 1;
    } else {
      return 0;
    }
  })
  .map(tag => {
    const slug = tag.taxonomySlug || tag.node.taxonomySlug;
    const name = tag.taxonomyName || tag.node.taxonomyName;
    return (
      <li key={slug}>
        <a href={`/tags/${slug}`}>
          {name}
        </a>
      </li>
    )
  })
  return (
    <Fragment>
      <code className="language-text">Post Tags:</code>
      <ListStyles>
        {tagItems}
      </ListStyles>
    </Fragment>
  )
}

export default PostTags; 