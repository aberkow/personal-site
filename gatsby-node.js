const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  /**
   * query posts and create a page for each
   */
  const blogPosts = graphql(`
    {
      allContentfulBlogPost {
        edges {
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
          node {
            contentful_id
            slug
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.log(result.errors)
      reject(result.errors)
    }

    const posts = result.data.allContentfulBlogPost.edges;
    const postsPerPage = 10;
    const numPages = Math.ceil(posts.length / postsPerPage);
    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
    const blogIndexTemplate = path.resolve('./src/templates/blog-index.js');
    
    // create paginated blog pages
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: blogIndexTemplate,
        context: {
          currentPage: i + 1,
          limit: postsPerPage,
          numPages,
          skip: i * postsPerPage
        }
      })
    })

    // create a page for each blog post
    posts.forEach(({ next, node, previous }) => {
      createPage({
        path: `blog/${node.slug}`,
        component: blogPostTemplate,
        context: {
          id: node.contentful_id,
          next,
          previous
        }
      })
    })
  })

  /**
   * Query tags and create pages for each with their posts.
   */
  const tagPages = graphql(`
    {
      allContentfulSinglePostTaxonomy {
        edges {
          node {
            taxonomyName
            taxonomySlug
            blog_post {
              title
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.log(result.errors)
      reject(result.errors)
    }
    const tag = result.data.allContentfulSinglePostTaxonomy.edges
    const tagTemplate = path.resolve('./src/templates/tag-index.js');

    tag.forEach(({ node }) => {
      createPage({
        path: `tags/${node.taxonomySlug}`,
        component: tagTemplate,
        context: {
          title: node.taxonomyName,
          posts: node.blog_post
        }
      })
    })
  })

  // wait for all promises to resolve and then return.
  return Promise.all([blogPosts, tagPages]);
}
