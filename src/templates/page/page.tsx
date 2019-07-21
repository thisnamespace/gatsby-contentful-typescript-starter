import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Layout from './../../layout'

interface IPageTemplateProps {
  data: {
    contentfulPage: {
      id: string
      title: string
      slug: string
      body: {
        body: any
      }
    }
  }
}

const PageTemplate: React.SFC<IPageTemplateProps> = ({ data }) => {
  const { title } = data.contentfulPage
  const { body } = data.contentfulPage.body

  return (
    <Layout>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: body }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      body {
        body
      }
      id
      slug
      title
    }
  }
`

export default PageTemplate
