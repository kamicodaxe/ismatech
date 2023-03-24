import { useMemo } from "react"
import LearnMore from "./LearnMore"

interface Props {
    locale: string
    extended?: boolean
}

const IBM: React.FC<Props> = ({ locale, extended }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 section-base">

            {/* :TITLE CONTAINER */}
            <div className={`mx-auto max-w-3xl space-y-3 text-center ` + (extended ? 'py-16' : '')}>
                {/* ::Title */}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-wide relative before:w-16 before:h-16  ">
                    <span className="h-12 w-12 bg-primary absolute rounded-full left-0" />
                    Ismatech <span className="text-primary">Business</span> Management
                </h2>
                {/* ::Text */}
                <p className="text-sm sm:text-base text-gray-700">Débloquez le succès professionnel avec Ismatech Business Management : Analyse Swot, vision, stratégies, suivi et rentabilité personnelle.</p>
            </div>

            <div className="container flex flex-col-reverse mx-auto lg:flex-row">

                <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src="https://source.unsplash.com/n95VMLxqM2I/1280x" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                    </div>
                </div>

                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                    {
                        s.items.map(item => (
                            <div key={item.title} className="flex space-x-2 sm:space-x-4">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg> */}
                                <div className="space-y-2">
                                    <p className="title-3">{item.title}</p>
                                    <p className="content-3">{item.body}</p>
                                </div>
                            </div>
                        ))
                    }
                    <LearnMore locale={locale} href='/business-management' />
                </div>

            </div>
        </section>
    )
}

const strings = {
    'en': {
        items: [
            {
                title: "Project Analysis",
                body: "This is where we will decide which technology sack to use for your web design or mobile application project."
            },
            {
                title: "Prototyping",
                body: "After analysing the project, we will produce a prototype of the project that will be validated by the client before we go further."
            },
            {
                title: "Coding",
                body: "Our favourite part, At this point, we will code your software to life."
            },
            {
                title: "Content Creation",
                body: "At this point, we will create SEO ready content for your website/application. Here we will need all the documentation the client can provide to us."
            },
        ]
    },
    'fr': {
        items: [
            {
                title: "Analyse SWOT des entreprises",
                body: `L'analyse SWOT d'ISMATECH permet aux professionnels d'identifier et d'évaluer les forces, les faiblesses, les opportunités et les menaces de leurs entreprises. Notre équipe d'experts vous fournira une évaluation précise et complète des performances actuelles et du potentiel futur de l'entreprise.`
            },
            {
                title: "Conseil sur la vision et les stratégies",
                body: "Chez ISMATECH, nous fournissons des services de conseil professionnel pour vous aider à définir et à développer une vision et une stratégie efficaces pour atteindre vos objectifs souhaités. Contactez-nous dès aujourd'hui pour commencer à planifier votre avenir."
            },
            {
                title: "Elaboration et mise en oeuvre des organigrammes",
                body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque."
            }
        ]
    }
}

export default IBM