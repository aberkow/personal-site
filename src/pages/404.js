import React from 'react'
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout'

const NotFoundPage = ({ data }) => (
  <Layout>
    <h1>Feeling Lost?</h1>
    <p>
      <strong>Flight 404 isn't leaving for a while...</strong>
    </p>
    <Img 
      alt="airplane on ground surrounded with trees"
      fluid={data.file.childImageSharp.fluid}
      />
    <p><a href="https://unsplash.com/@davidkovalenkoo">Image by David Kovalenko</a></p>
  </Layout>
)

export const NotFoundImage = graphql`
  query {
    file(relativePath: {eq: "404.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          aspectRatio
          tracedSVG
          srcSet
          sizes
          src 
        }
      }
    }
  }
`

export default NotFoundPage
