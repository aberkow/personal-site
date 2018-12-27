import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Layout from '../components/layout';

const BlogIndexStyles = styled.ol`
  display: grid;
  grid-gap: 2em;
  list-style-type: none;
  padding: 0;
  @media screen and (min-width: ${props => props.theme.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
  }
  li {
    position: relative;
    transition: transform 0.2s ease-in;
    &:hover {
      transform: scale(1.05);
      .index-item_content {
        border: 0.25em solid ${props => props.theme.teal};
      }
    }
  }
  .index-item_content {
    padding: 1em;
    position: relative;
    min-height: 100%;
    border: 0.25em solid ${props => props.theme.darkRed};
    * + * {
      margin-top: 1em;
    }
  }
  a {
    font-size: ${props => props.theme.baseFontSize};
    color: ${props => props.theme.white};
    text-decoration: none;
    background-color: ${props => props.theme.darkRed};
    padding: 0.5em;
    border: 0.25em solid ${props => props.theme.darkRed};
    display: inline-block;
    &:focus,
    &:hover {
      background-color: ${props => props.theme.teal};
      border: 0.25em solid ${props => props.theme.teal};
    }
    &:before,
    &:after {
      border-bottom-color: transparent;
    }
  }
  p {
    font-size: ${props => props.theme.baseFontSize};
    line-height: 1.8;
    font-family: ${props => props.theme.serif};
    margin: 0;
  }
  .clip {
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 100px;
    height: 100px;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    background-color: ${props => props.theme.white};
    z-index: 10
  }
`

const PaginationStyles = styled.div`
  display: flex;
  flex-direction: row-reverse;
  div {
    height: 150px;
    width: 150px;
    border: 1px solid;
    position: relative;
    clip-path: polygon(100% 0%,100% 0%,100% 100%,0% 100%);
    background-color: rgb(49,27,46);
    border: 1px solid rgb(49,27,46);
  }
  a {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 100%;
    height: 100%;
    text-decoration: none;
    font-size: 1.2em;
  }
  span {
    transform: rotate(-45deg);
    display: inline-block;
    position: absolute;
    bottom: 34px;
    left: 60px;
    color: ${props => props.theme.white};
    max-width: 80px;
  }
`;

const BlogIndex = ({ pageContext, data }) => {
  
  const { allContentfulBlogPost: {edges} } = data;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? 
    '/blog' : 
    `/blog${(currentPage - 1).toString()}`;
  const nextPage = `/blog/${(currentPage + 1).toString()}`;
  
  const posts = edges.map(({ node }) => {
    const excerpt = node.excerpt !== null && node.excerpt.excerpt ? node.excerpt.excerpt : '';
    return (
      <li className="index-item" key={`item-${node.contentful_id}`}>
        <div className="index-item_content">
          <Link to={`/blog/${node.slug}`}>
            {node.title}
          </Link>
          <p>
            {excerpt}
          </p>
          <Link aria-hidden="true" to={`/blog/${node.slug}`}>
            Read More
          </Link>   
        </div>
        <div className="clip"></div>
      </li>
    )
  })
  return (
    <Layout page="blog-index">
      <h1>Blog</h1>
      <BlogIndexStyles>
        {posts}
      </BlogIndexStyles>
      <PaginationStyles>
        {
          !isFirst && (
            <div id="prev-page" className="pagination-wrapper">
              <Link to={prevPage} id="prev-link" className="pagination-link">
                <span id="prev-text" className="pagination-text">Previous Page</span>
              </Link>
            </div>
            
          )
        }
        {
          !isLast && (
            <div className="pagination-wrapper">
              <Link id="next-link" className="pagination-link" to={nextPage}>
                <span id="next-text" className="pagination-text">
                  Next Page
                </span>
              </Link>
            </div>
          )
        }
      </PaginationStyles>
    </Layout>
  )
}

export default BlogIndex;

export const BlogIndexQuery = graphql`
  query blogIndexQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      limit: $limit
      skip: $skip
      sort: {
        fields: createdAt
        order: DESC
      }
    ) {
      edges {
        node {
          contentful_id
          slug
          title
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`;