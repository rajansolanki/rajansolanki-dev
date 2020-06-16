module.exports = {
  siteMetadata: {
    title: 'Raj',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs'],
      },
    },
  ],
};
