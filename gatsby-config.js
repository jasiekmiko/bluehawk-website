module.exports = {
  pathPrefix: "/reponame",
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
  ],
}