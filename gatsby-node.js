/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const config = require('./src/utils/site-config.js')

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({ node }) => {
        createPage({
          path: `/${node.slug}/`,
          component: path.resolve(`./src/templates/page/page.tsx`),
          context: {
            slug: node.slug
          }
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPages])
}
