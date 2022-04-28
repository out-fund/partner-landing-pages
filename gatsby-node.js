const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const landingPages = await graphql(`
    query landingPages {
      allLandingPagesYaml {
        edges {
          node {
            id
            slug
            hideLandingPage
            published
          }
        }
      }
    }
  `)

  if (landingPages.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const createLandingPages = landingPages.data.allLandingPagesYaml.edges

  // TODO If published create page

  createLandingPages.forEach(({ node }, index) => {
    if (!node.hideLandingPage && node.published) {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`./src/components/LandingPageLayout.js`),
        context: { pageId: node.id },
      })
    }
  })

  createLandingPages.forEach(({ node }, index) => {
    if (node.published) {
      createPage({
        path: `/${node.slug}/get-funded`,
        component: path.resolve(`./src/components/FormPageLayout.js`),
        context: { pageId: node.id },
      })
    }
  })
}
