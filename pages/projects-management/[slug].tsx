// import { GetStaticPaths, GetStaticProps } from "next"
// import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
// import BlogPreview from "../../components/BlogPreview"
import Header from '../../components/Header'
import IPM from "../../components/IPM"
import Layout from "../../components/Layout"
import { IPostDataResponse } from "../../lib/graphql"

interface Props {
    article: IPostDataResponse,
    articles: IPostDataResponse[],
    slug: string
}

const Blog: React.FC<Props> = ({ article, articles, slug }) => {
    const { locale } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <Layout locale={locale as string} title={article?.title || s.title} imgSrc={article?.featuredImage?.node?.sourceUrl} desc={article?.excerpt?.replaceAll('<p>', "").replaceAll('</p>', "") || s.desc}>
            <Header locale={locale as string} title="Projects Management" className="" active='projects-management' />
            <section className="prose lg:prose-xl max-w-5xl mx-auto mt-16">

                <img
                    className=" object-cover"
                    src={"https://source.unsplash.com/fIq0tET6llw/1280x420"}
                    alt=""
                // layoutId="image"
                />

                <div className="">
                    <h1>Idée De Projet, Etudes De Faisabilité</h1>
                    <p>Vous êtes un professionnel à la recherche de l&apos;idée de projet idéale ? Vous envisagez de lancer un nouveau projet, mais vous n&apos;êtes pas sûr de sa faisabilité ? Vous craignez que votre projet n&apos;aboutisse pas ?</p>
                    <p>
                        Chez ismatech, nous comprenons le défi que représente le lancement d&apos;un projet réussi. C&apos;est pourquoi nous proposons une gamme de services pour vous aider à concrétiser votre idée de projet. Nos services comprennent l&apos;idéation de projet, les études de faisabilité, les études de marché et bien plus encore.
                    </p>

                    <h3>
                        Idée de projet
                    </h3>
                    <p>
                        Chez ismatech, nous prenons votre idée de projet et vous aidons à la définir. Nous vous aidons à créer un plan détaillé pour le projet et à développer une stratégie pour son exécution réussie. Nous travaillons avec vous pour identifier les risques et les opportunités potentiels du projet, et pour créer un calendrier d&apos;exécution.
                    </p>

                    <h3>Études de faisabilité</h3>
                    <p>
                        Une fois que vous avez identifié une idée de projet, nous vous aidons à déterminer sa faisabilité. Nous examinons l&apos;idée du projet et les risques qui y sont associés, et nous élaborons un plan d&apos;action pour en assurer la réussite. Nous examinons également les conditions du marché et le paysage concurrentiel pour nous assurer que le projet est viable.                    </p>

                    <h3>Études de marché</h3>
                    <p>Une fois que nous avons déterminé la faisabilité du projet, nous réalisons des études de marché pour nous assurer de sa viabilité. Nous examinons la taille du marché potentiel, la concurrence, les tendances de consommation et d&apos;autres facteurs pour nous assurer que le projet a de bonnes chances de succès. Nous fournissons également des informations sur les modèles de revenus et de coûts potentiels, afin que vous puissiez prendre des décisions en connaissance de cause.</p>

                    <p>
                        Chez ismatech, nous nous engageons à vous aider à concrétiser votre idée de projet. Nous proposons une gamme de services pour vous aider à définir, protéger et valider votre idée de projet et garantir son succès. Contactez-nous dès aujourd&apos;hui pour savoir comment nous pouvons vous aider à atteindre vos objectifs.                    </p>
                </div>


            </section>

            <IPM locale={locale as string} />
        </Layout>
    )
}


const strings = {
    'en': {
        title: "ISMATECH article",
        desc: "ISMATECH Blog"
    },
    'fr': {
        title: "ISMATECH article",
        desc: "ISMATECH Blog"
    }
}

// Idée De Projet, Etudes De Faisabilité
// le cabinet ismatech contribue à redefinir votre idée de projet, à la proteger et à valider pour en faire un projet réalisable. Aussi procede-t-elle à l'étude du marché

// export const getStaticProps: GetStaticProps = async (context) => {
//     const apolloClient = getApolloClient()
//     const data = await apolloClient.query({
//         query: gql`
//         query GetPostBySlug($slug: String = "", $language: LanguageCodeFilterEnum = EN) {
//             postBy(slug: $slug) {
//               id
//               postId
//               title(format: RENDERED)
//               slug
//               excerpt(format: RENDERED)
//               featuredImage {
//                 node {
//                   altText
//                   sourceUrl(size: MEDIUM_LARGE)
//                 }
//               }
//               content(format: RENDERED)
//               translations {
//                 id
//                 postId
//                 slug
//                 uri
//                 link
//                 language {
//                   code
//                   locale
//                 }
//               }
//             }
//             posts(where: {language: $language}) {
//               edges {
//                 node {
//                   postId
//                   slug
//                   title(format: RENDERED)
//                   featuredImage {
//                     node {
//                       altText
//                       caption
//                       sourceUrl(size: THUMBNAIL)
//                     }
//                   }
//                   excerpt(format: RENDERED)
//                 }
//               }
//             }
//           }
//         `,
//         variables: {
//             slug: context.params?.slug,
//             language: context.locale?.toUpperCase(),
//         }
//     })


//     return {
//         props: {
//             article: data?.data.postBy as IPostDataResponse,
//             articles: (data?.data?.posts?.edges).map((p: { node: IPostDataResponse }) => p?.node),
//             slug: context.params?.slug,
//             revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
//         }
//     }

// }

// export const getStaticPaths: GetStaticPaths = async (context) => {
//     const apolloClient = getApolloClient()
//     const data = await apolloClient.query({
//         query: gql`
//         query AllPostSlugs($language: LanguageCodeFilterEnum = ALL) {
//             posts(where: {language: $language}) {
//               edges {
//                 node {
//                   postId
//                   slug
//                 }
//               }
//             }
//           }
//     `,
//         variables: {}
//     })

//     return {
//         paths: (data.data.posts.edges as { node: IPostDataResponse }[]).map($ => ({ 'params': { slug: $.node.slug } })), //OK
//         fallback: 'blocking'
//     }

// }


export default Blog