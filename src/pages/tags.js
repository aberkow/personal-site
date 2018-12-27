import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PostTags from '../components/postTags';

const TagPage = ({ data }) => (
  <Layout>
    <h1>Tags</h1>
    <PostTags 
      tags={data.allContentfulSinglePostTaxonomy.edges} />
  </Layout>
)

export const TagPageQuery = graphql`
  query {
    allContentfulSinglePostTaxonomy {
      edges {
        node {
          taxonomyName
          taxonomySlug
        }
      }
    }
  }
`

export default TagPage