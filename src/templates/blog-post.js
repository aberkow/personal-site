import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import ArticleWrapper from '../components/styles/articleWrapper';
import ClipStyle from '../components/styles/clipStyle';
import Layout from '../components/layout';
import ContentWrapper from '../components/styles/contentWrapper';
import PostMetaContent from '../components/postMetaContent';

const BlogPostTemplate = ({ pageContext, data }) => {
  const next = pageContext.next;
  const prev = pageContext.previous;
  const { contentfulBlogPost: { 
    title,
    featuredImageReference: { 
      imageCredit, 
      imageCreditLink, 
      altText: { altText }, 
      featuredImage: { fluid } }, 
    content: { childMarkdownRemark: { html } },
    tagReferenceGroup } } = data;
  return (
    <Layout page="blog-post">
      <ContentWrapper>
        <Img 
          alt={altText}
          className="featured-image" 
          fluid={fluid} />
        <ArticleWrapper>
          <h1>{title}</h1>
          <article dangerouslySetInnerHTML={{__html: html}} />
          <PostMetaContent 
            tagReferenceGroup={tagReferenceGroup}
            next={next}
            prev={prev}
            imageCreditLink={imageCreditLink}
            imageCredit={imageCredit}
          />
          <ClipStyle />
        </ArticleWrapper>
      </ContentWrapper>
    </Layout>
  )
}

export default BlogPostTemplate;

export const BlogPostQuery = graphql`
  query($id: String!) {
  contentfulBlogPost(contentful_id: {eq: $id}) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      tagReferenceGroup {
        taxonomyName
        taxonomySlug
      }
      featuredImageReference {
        altText {
          altText
        }
        imageCredit
        imageCreditLink
        featuredImage {
          fluid(maxWidth: 1000) {
            aspectRatio
            src
            tracedSVG
            srcSet
            sizes
          }
        }
      }
    }
  }
`