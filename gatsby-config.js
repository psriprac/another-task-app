require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `another-task-app`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: `gatsby-source-mongodb`,
    options: {
      connectionString: `mongodb+srv://${process.env.TASKS_USER}:${process.env.TASKS_PWD}@cluster0.erxdh.mongodb.net/?retryWrites=true&w=majority`,
      dbName: `task_app`,
      collection: `tasks`
    },
  }]
};