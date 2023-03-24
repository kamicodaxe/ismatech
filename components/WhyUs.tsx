import { useMemo } from "react"

interface Props {
    locale: string
    extended?: boolean
}

const WhyUs: React.FC<Props> = ({ locale, extended }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="bg-white dark:bg-gray-900 section-base">
            <div className="container px-6 py-10 mx-auto">
                {/* :TITLE CONTAINER */}
                <div className={`mx-auto max-w-3xl space-y-3 text-center ` + (extended ? 'py-16' : '')}>
                    {/* ::Title */}
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-wide relative before:w-16 before:h-16  ">
                        <span className="h-12 w-12 bg-primary absolute rounded-full left-0" />
                        Pourquoi <span className="text-primary">ISMATECH</span>
                    </h2>
                    {/* ::Text */}
                    <p className="text-sm sm:text-base text-gray-700">Libérez votre potentiel professionnel avec ISMATECH - Transformez votre entreprise et atteignez de nouveaux sommets !</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">

                    {
                        s.items.map(item => (
                            <div className="space-y-3" key={item.title}>
                                {/* <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span> */}

                                <h3 className="title-3">{item.title}</h3>

                                <p className="content-3">
                                    {item.body}
                                </p>

                                {/* <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    <span className="mx-1">read more</span>
                                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a> */}
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

const strings = {
    'en': {
        items: [
            {
                title: "Priorité",
                body: "Notre partenariat repose avant tout sur la confiance. C'est pourquoi nous vous proposons un projet concret, des conseils pratiques et une approche analytique adaptée à votre environnement unique. Nous voulons vous aider à atteindre vos objectifs plus rapidement et plus efficacement, afin que vous puissiez vous concentrer sur votre cœur de métier. Travaillons ensemble pour créer un partenariat fructueux et durable."
            },
            {
                title: "Objectivité",
                body: "Notre vision est axée sur la fourniture d'un travail de qualité avec un objectif unique : vous fournir une évaluation honnête et impartiale de la situation actuelle de votre entreprise. Nous nous engageons à fournir nos services sans aucun parti pris personnel et en gardant toujours à l'esprit votre meilleur intérêt. Grâce à notre expertise et à notre dévouement, nous nous efforçons de faire en sorte que vous disposiez des informations les plus précises et les plus récentes pour prendre des décisions en toute connaissance de cause."
            },
            {
                title: "Disponibilité",
                body: "A votre service, le Cabinet Ismatech s'engage à fournir un audit complet de la situation actuelle de votre entreprise et à mener à bien notre mission dans les délais impartis. Nous nous efforçons de répondre à vos attentes et d'atteindre vos objectifs commerciaux. Notre équipe de professionnels expérimentés se consacre à la fourniture d'un service de la plus haute qualité et à l'obtention des meilleurs résultats dans les meilleurs délais."
            },
            {
                title: "Originalité",
                body: "Chez ISMATECH, nous mettons tout en œuvre pour que vos projets se distinguent par leur caractère unique et attrayant. Nous garantissons que tous nos services sont imprégnés de singularité afin que chacun de vos projets soit un chef-d'œuvre unique. Laissez-nous vous aider à créer quelque chose de spécial !"
            },
            {
                title: "Flexibilité",
                body: "Chez ISMATECH, nous comprenons que les besoins de votre entreprise sont en constante évolution. C'est pourquoi nous nous engageons à vous fournir les solutions les plus récentes, adaptées à vos besoins spécifiques. Notre capacité à écouter et à répondre rapidement à vos demandes, ainsi que notre connaissance des dernières tendances du marché et des avancées techniques, vous garantissent le plus haut niveau de satisfaction. Laissez-nous être votre partenaire pour le succès."
            },
            {
                title: "Mobilité",
                body: "Notre mobilité nous permet d'explorer les principales villes africaines et d'être les témoins directs de leur processus de développement. Nous nous engageons à vous fournir le meilleur service et la meilleure assistance possibles lors de votre voyage dans ces destinations dynamiques et en constante évolution. Laissez-nous vous aider à tirer le meilleur parti de votre entreprise en Afrique !"
            }
        ]
    },
    'fr': {
        items: [
            {
                title: "Priorité",
                body: "Notre partenariat repose avant tout sur la confiance. C'est pourquoi nous vous proposons un projet concret, des conseils pratiques et une approche analytique adaptée à votre environnement unique. Travaillons ensemble pour créer un partenariat fructueux et durable."
            },
            {
                title: "Objectivité",
                body: "Notre vision est axée sur la fourniture d'un travail de qualité avec un objectif unique : vous fournir une évaluation honnête et impartiale de la situation actuelle de votre entreprise. Nous nous engageons à fournir nos services sans aucun parti pris personnel et en gardant toujours à l'esprit votre meilleur intérêt."
            },
            {
                title: "Disponibilité",
                body: "A votre service, le Cabinet Ismatech s'engage à fournir un audit complet de la situation actuelle de votre entreprise et à mener à bien notre mission dans les délais impartis. Nous nous efforçons de répondre à vos attentes et d'atteindre vos objectifs commerciaux."
            },
            {
                title: "Originalité",
                body: "Chez ISMATECH, nous mettons tout en œuvre pour que vos projets se distinguent par leur caractère unique et attrayant. Nous garantissons que tous nos services sont imprégnés de singularité afin que chacun de vos projets soit un chef-d'œuvre unique. Laissez-nous vous aider à créer quelque chose de spécial !"
            },
            {
                title: "Flexibilité",
                body: "Chez ISMATECH, nous comprenons que les besoins de votre entreprise sont en constante évolution. C'est pourquoi nous nous engageons à vous fournir les solutions les plus récentes, adaptées à vos besoins spécifiques. Laissez-nous être votre partenaire pour le succès."
            },
            {
                title: "Mobilité",
                body: "Notre mobilité nous permet d'explorer les principales villes africaines et d'être les témoins directs de leur processus de développement. Laissez-nous vous aider à tirer le meilleur parti de votre entreprise en Afrique !"
            }
        ]
    }
}

export default WhyUs