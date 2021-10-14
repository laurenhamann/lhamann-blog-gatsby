require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: "Lauren Hamann: Frontend Developer",
    description: "Portfolio and Blog to detail my journey in web development",
    url: "https://www.lhamann.com"
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/components/layout.js')
        },
        gatsbyRemarkPlugins:[{ 
          resolve: 'gatsby-remark-images', 
          options: {
            maxWidth: 590,
          },
        }],
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/components/assets/images/`,
      },
      __key: "images",
      },
    {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: `${__dirname}/src/pages/`,
    },
    __key: "pages",
    },
    {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "projects",
      path: `${__dirname}/src/projects/`,
    },
    __key: "projects",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'posts',
        path:  `${__dirname}/src/posts`,
      },
      __key: "posts",
    },
    {
    resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/components/assets/images/favicon.png`,
        theme_color_in_head: false,
      },
    },
    {
    resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
};
