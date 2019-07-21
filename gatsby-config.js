const config = require('./src/utils/site-config')
require('dotenv').config({
  silent: true
})

const contentfulConfig = {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
}

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
    keywords: config.siteKeywords,
    rssMetadata: {
      site_url: config.siteUrl,
      feed_url: `${config.siteUrl}/rss.xml`,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl}${config.siteLogo}`,
      author: config.author,
      copyright: config.copyright
    }
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-contentful-typescript',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig
    }
    // Use this plugin if you need to have a different folder than the default src/pages.
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `./src/static-app/pages`
    //   }
    // }
  ]
}
