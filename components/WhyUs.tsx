import { useMemo } from "react"

interface Props {
    locale: string
}

const WhyUs: React.FC<Props> = ({ locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="bg-white dark:bg-gray-900 section-base">
            <div className="container px-6 py-10 mx-auto">
                {/* :TITLE CONTAINER */}
                <div className="mx-auto max-w-3xl space-y-3 text-center">
                    {/* ::Title */}
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-wide relative before:w-16 before:h-16  ">
                        <span className="h-12 w-12 bg-primary absolute rounded-full left-0" />
                        Pourquoi <span className="text-primary">ISMATECH</span>
                    </h2>
                    {/* ::Text */}
                    <p className="text-sm sm:text-base text-gray-700">Eaque totam placeat fuga neque quam vero. Harum nesciunt voluptate quidem, repudiandae nihil repellendus praesentium impedit sequi non modi ipsa! Libero, nostrum?</p>
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
            {
                title: "Quality Check",
                body: "This is a critical step of our work. The whole project is thouroughly reviewed before final deployment."
            },
            {
                title: "Deployment",
                body: "Horraay. Your project is now battle tested and deployed"
            }
        ]
    },
    'fr': {
        items: [
            {
                title: "Priorité",
                body: "C’est là que nous déciderons de la technologie à utiliser pour votre projet de conception Web ou d’application mobile."
            },
            {
                title: "Objectivité",
                body: "Après analyse du projet, nous produirons un prototype du projet qui sera validé par le client avant d'aller plus loin."
            },
            {
                title: "Disponibilité",
                body: "À ce stade, nous créerons du contenu pour votre projet. Ici, nous aurons besoin de toute la documentation que le client peut nous fournir."
            },
            {
                title: "Originalité",
                body: "Ici, votre site Web ou votre application mobile fait l’objet d’un examen approfondi. Après la phase de contrôle de la qualité, votre projet sera prêt pour la production."
            },
            {
                title: "Flexibilité",
                body: "Horraah. Votre projet est maintenant disponible au public."
            },
            {
                title: "Mobilité",
                body: "Horraah. Votre projet est maintenant disponible au public."
            }
        ]
    }
}

export default WhyUs