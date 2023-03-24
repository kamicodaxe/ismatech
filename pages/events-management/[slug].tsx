// import { GetStaticPaths, GetStaticProps } from "next"
// import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { useMemo } from "react"
// import BlogPreview from "../../components/BlogPreview"
import Header from '../../components/Header'
import IEM from "../../components/IEM"
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
            <Header locale={locale as string} title="Business Management" className="" active='events-management' />
            <section className="prose lg:prose-xl max-w-5xl mx-auto mt-16">

                <Image
                    width={1280}
                    height={420}
                    className=" object-cover"
                    src={"/images/hilton.jpg"}
                    alt=""
                // layoutId="image"
                />

                <div className="">
                    <h1>Organisation Des Rencontres Internationales</h1>
                    <p>
                        L&apos;organisation de réunions internationales peut être une tâche intimidante, mais avec une bonne planification et une bonne coordination, elle peut être couronnée de succès.La clé de la réussite des réunions internationales réside dans la définition du but de la réunion, l&apos;établissement d&apos;objectifs clairs, la fixation d&apos;un calendrier et la connaissance de la culture, du contexte et des attentes des participants. Lorsque tous ces éléments sont en place, les organisations peuvent en toute confiance organiser des réunions internationales qui seront efficaces et agréables pour tous les participants.
                    </p>
                    <p>
                        Pour garantir le succès de l&apos;événement, il est essentiel de prendre en compte les aspects logistiques tels que le lieu, la restauration et l&apos;hébergement. En outre, des stratégies de communication et de marketing doivent être mises en œuvre pour atteindre et impliquer le public cible. En utilisant les bonnes stratégies, les organisations seront en mesure d&apos;organiser des réunions internationales réussies, à la fois efficaces et professionnelles.
                    </p>
                    <h3>
                        Définir l&apos;objectif de la réunion
                    </h3>
                    <p>
                        La première étape de l&apos;organisation d&apos;une réunion internationale consiste à en définir l&apos;objectif. Il s&apos;agit d&apos;une étape importante, car elle donnera le ton à l&apos;ensemble de l&apos;événement. Il est essentiel d&apos;être clair et concis dans la définition de l&apos;objectif de la réunion. Cela permettra de s&apos;assurer que toutes les personnes participant à l&apos;événement sont sur la même longueur d&apos;onde et seront en mesure de collaborer efficacement.
                    </p>

                    <h3>Fixer des objectifs clairs</h3>
                    <p>
                        Une fois le but de la réunion défini, il est important de fixer des objectifs clairs. Cela permettra de s&apos;assurer que tous les participants comprennent le résultat souhaité de l&apos;événement. En comprenant clairement les objectifs, les participants seront mieux à même de collaborer et de parvenir à un résultat mutuellement bénéfique.
                    </p>

                    <h3>Fixer un calendrier</h3>
                    <p>Lors de l&apos;organisation de réunions internationales, il est essentiel de fixer un calendrier. Cela permettra à tout le monde de rester sur la bonne voie et de s&apos;assurer que tous les participants connaissent le calendrier de l&apos;événement. Il est important d&apos;être réaliste lors de l&apos;établissement d&apos;un calendrier et de faire preuve de souplesse pour s&apos;adapter à tout changement éventuel.</p>

                    <h3>Se renseigner sur la culture, le contexte et les attentes</h3>
                    <p>L&apos;une des étapes les plus importantes de l&apos;organisation de réunions internationales consiste à se renseigner sur la culture, le contexte et les attentes des participants. Ce faisant, les organisations seront mieux équipées pour faire face à toute question ou préoccupation potentielle pouvant survenir au cours de l&apos;événement. En outre, il est important de connaître les normes culturelles ou sociales à prendre en compte lors de la planification de l&apos;événement.</p>

                    <h3>La logistique</h3>
                    <p>Les organisations doivent également prendre en compte la logistique de l&apos;événement. Cela comprend le lieu, la restauration et l&apos;hébergement. Il est important d&apos;offrir aux participants un environnement confortable et sûr. En outre, les organisations doivent s&apos;assurer que le lieu est correctement équipé pour répondre aux besoins des participants.</p>

                    <h3>Stratégies de communication et de marketing</h3>
                    <p>Il est également essentiel d&apos;utiliser des stratégies de communication et de marketing pour atteindre et impliquer le public cible. Il s&apos;agit notamment d&apos;utiliser diverses formes de médias pour promouvoir l&apos;événement et d&apos;entrer en contact avec les participants potentiels sur les médias sociaux. En outre, il est important de veiller à ce que toute la communication soit claire et cohérente avec les objectifs de l&apos;événement.</p>

                    <p>
                        En fin de compte, l&apos;organisation de réunions internationales peut être une tâche intimidante, mais avec une planification et une coordination adéquates, elle peut être couronnée de succès. En suivant ces étapes clés, les organisations peuvent organiser en toute confiance des réunions internationales efficaces, efficientes et professionnelles.
                    </p>
                </div>


            </section>

            <IEM locale={locale as string} />
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