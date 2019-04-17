const path = require(`path`)

exports.onCreateNode = ({
  node,
  getNode,
  actions
}) => {
  const {
    createNodeField
  } = actions
  if (node.internal.type === `CardsSetsYaml`) {
    const slug = node.title
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions
  return graphql(`
    {
      allCardsSetsYaml {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `).then(result => {
    result.data.allCardsSetsYaml.edges.forEach(({node}) => {
      createPage({
        path: node.id,
        component: path.resolve(`./src/templates/card-set.jsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          title: node.title,
        },
      })
    })
  })
}