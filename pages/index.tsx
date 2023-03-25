import { gql } from '@apollo/client'
import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import ContactUs from '../components/ContactUs'
import Courses from '../components/Courses'
import CTA from '../components/CTA'
import Departments from '../components/Departments'
import HomeHeader from '../components/HomeHeader'
import IBM from '../components/IBM'
import IEM from '../components/IEM'
import IPM from '../components/IPM'
import Layout from '../components/Layout'
import WhyUs from '../components/WhyUs'
import { getApolloClient, IHomePageData } from '../lib/graphql'
import wordpress from '../lib/wordpress'

const Home: NextPage<IHomePageData> = ({ data: { projects, posts } }) => {
  const { locale } = useRouter()
  const title = "ISMATECH, L'essentiel du conseil en management"
  const desc = "L'essentiel du conseil en management"

  return (
    <Layout locale={locale as string} title={title} desc={desc} imgSrc="/images/ibs.jpg">
      <HomeHeader locale={locale as string} active="" />
      <Departments locale={locale as string} />
      <WhyUs locale={locale as string} />
      <Courses locale={locale as string} />
      <IBM locale={locale as string} />
      <CTA />
      <IPM locale={locale as string} />
      <IEM locale={locale as string} />
      {/* <Partners locale={locale as string} /> */}
      <ContactUs locale={locale as string} />
      {/* <BlogPreview isPreview locale={locale as string} articles={posts?.edges?.map(p => p.node) || []} /> */}
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  wordpress.initialiseWordpress()
  const params = "&per_page=4"

  const apolloClient = getApolloClient()
  try {
    const data = await apolloClient.query({
      query: gql`
      query AllHomePageData($language: LanguageCodeFilterEnum = ${context.locale?.toUpperCase()}) {
        projects(where: {language: $language}, first: 4) {
          edges {
            node {
              projectId
              slug
              uri
              title(format: RENDERED)
              featuredImage {
                node {
                  altText
                  caption
                  title(format: RAW)
                  sourceUrl(size: MEDIUM)
                }
              }
              tools {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
        }
        posts(where: {language: $language}, first: 4) {
          edges {
            node {
              postId
              slug
              uri
              title(format: RENDERED)
              featuredImage {
                node {
                  altText
                  caption(format: RAW)
                  sourceUrl(size: MEDIUM)
                }
              }
              excerpt
            }
          }
        }
      }
      `
    }) as unknown as IHomePageData

    return {
      props: {
        ...data,
        revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
      }
    }
  } catch (e) {
    console.warn(e)
    return {
      props: {
        error: 'server error',
        data: {
          projects: [],
          posts: []
        },
        revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
      }
    }
  }
}


export default Home
