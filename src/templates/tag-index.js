import React from 'react';
import Link from 'gatsby-link';

import Layout from '../components/layout';

const TagIndex = ({ pageContext }) => {
  const taggedPosts = pageContext.posts.map(post => {
    return (
      <li key={post.slug}>
        <Link to={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </li>
    )
  })
  return (
    <Layout>
      <h1>Posts with the tag - {pageContext.title}</h1>
      <ol>
        {taggedPosts}
      </ol>
    </Layout>
  )
}

export default TagIndex