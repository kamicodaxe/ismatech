import { useMemo } from "react"

interface Props {
    locale: string
}

const Departments: React.FC<Props> = ({ locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="mx-auto py-10 px-4 w-full max-w-7xl bg-white text-gray-800 section-base">
            <div className="flex flex-col items-center space-y-12">
                {/* :PARTNERS LOGOS */}
                <div className="grid grid-cols-4 gap-6">

                    {/* ::Partner 1 -> ALL */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100 hover:text-primary transition-all cursor-pointer">
                        {/* <img src="https://fancytailwind.com/static/all-limitless-logo-a2bc67b04c70cbdaf47b69769ee38c39.svg" alt="" className="max-h-16 opacity-80" /> */}
                        <p className="text-7xl font-bold leading-10 px-16">IBS</p>
                    </div>

                    {/* ::Partner 2 -> Stellantis */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100 hover:text-primary transition-all cursor-pointer">
                        <p className="text-7xl font-bold leading-10 px-16">IBM</p>
                    </div>

                    {/* ::Partner 3 -> Google */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100 hover:text-primary transition-all cursor-pointer">
                        <p className="text-7xl font-bold leading-10 px-16">IPM</p>
                    </div>

                    {/* ::Partner 4 -> Microsoft */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100 hover:text-primary transition-all cursor-pointer">
                        <p className="text-7xl font-bold leading-10 px-16">IEM</p>
                    </div>

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
                title: "Analyse du projet",
                body: "C’est là que nous déciderons de la technologie à utiliser pour votre projet de conception Web ou d’application mobile."
            },
            {
                title: "Prototypage",
                body: "Après analyse du projet, nous produirons un prototype du projet qui sera validé par le client avant d'aller plus loin."
            },
            {
                title: "Coding",
                body: "Notre partie préférée, à ce stade, nous allons coder votre site Web / application."
            },
            {
                title: "Création de contenu",
                body: "À ce stade, nous créerons du contenu pour votre projet. Ici, nous aurons besoin de toute la documentation que le client peut nous fournir."
            },
            {
                title: "Contrôle de qualité",
                body: "Ici, votre site Web ou votre application mobile fait l’objet d’un examen approfondi. Après la phase de contrôle de la qualité, votre projet sera prêt pour la production."
            },
            {
                title: "Déploiement",
                body: "Horraah. Votre projet est maintenant disponible au public."
            }
        ]
    }
}

export default Departments