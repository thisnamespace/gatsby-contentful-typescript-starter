import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/global.style'
import theme from './../theme/theme.style'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
        allContentfulPage {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Fragment>
            <h1>{data.site.siteMetadata.title}</h1>
            <nav>
              <li>
                <Link to="/">Home</Link>
              </li>
              {data.allContentfulPage.edges.map((edge, idx) => (
                <li key={idx}>
                  <Link to={'/' + edge.node.slug}>{edge.node.title}</Link>
                </li>
              ))}
            </nav>
            {children}
          </Fragment>
        </ThemeProvider>
        <GlobalStyle />
      </Fragment>
    )}
  />
)

export default Layout
