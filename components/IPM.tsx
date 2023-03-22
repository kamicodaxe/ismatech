import Link from "next/link"
import { useMemo } from "react"

interface Props {
    locale: string
}

const IPM: React.FC<Props> = ({ locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100 section-base">

            {/* :TITLE CONTAINER */}
            <div className="mx-auto max-w-3xl space-y-3 text-center">
                {/* ::Title */}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-wide relative before:w-16 before:h-16  ">
                    <span className="h-12 w-12 bg-primary absolute rounded-full left-0" />
                    ISMATECH <span className="text-primary">Projects</span> Management
                </h2>
                {/* ::Text */}
                <p className="text-sm sm:text-base text-gray-700">Eaque totam placeat fuga neque quam vero. Harum nesciunt voluptate quidem, repudiandae nihil repellendus praesentium impedit sequi non modi ipsa! Libero, nostrum?</p>
            </div>

            <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
                {
                    s.items.map(item => (
                        <div key={item.title} className="flex flex-col px-8 py-6">
                            <img src={item.imageSrc} alt="" />
                            <h3 className="title-3">{item.title}</h3>
                            <p className="flex-1 content-3 mb-4">{item.body}</p>
                            <Link className="inline-flex items-center space-x-2 text-sm dark:text-violet-400" href="/ismatech-project-management/">
                                <div className="inline-flex items-center space-x-2 text-sm dark:text-violet-400 cursor-pointer">
                                    <span>Learn More</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

const strings = {
    'en': {
        items: [
            {
                title: "Project Analysis",
                body: "This is where we will decide which technology sack to use for your web design or mobile application project.",
                imageSrc: "https://source.unsplash.com/fIq0tET6llw/1280x"
            },
            {
                title: "Prototyping",
                body: "After analysing the project, we will produce a prototype of the project that will be validated by the client before we go further.",
                imageSrc: "https://source.unsplash.com/UVMPVIRCF5w/1280x"
            },
            {
                title: "Coding",
                body: "Our favourite part, At this point, we will code your software to life.",
                imageSrc: "https://source.unsplash.com/UVMPVIRCF5w/1280x"
            },
            {
                title: "Content Creation",
                body: "At this point, we will create SEO ready content for your website/application. Here we will need all the documentation the client can provide to us.",
                imageSrc: "https://source.unsplash.com/UVMPVIRCF5w/1280x"
            },
            {
                title: "Quality Check",
                body: "This is a critical step of our work. The whole project is thouroughly reviewed before final deployment.",
                imageSrc: "https://source.unsplash.com/UVMPVIRCF5w/1280x"
            },
            {
                title: "Deployment",
                body: "Horraay. Your project is now battle tested and deployed",
                imageSrc: "https://source.unsplash.com/UVMPVIRCF5w/1280x"
            }
        ]
    },
    'fr': {
        items: [
            {
                title: "Idée de Projet, Etudes de faisabilité",
                body: "C’est là que nous déciderons de la technologie à utiliser pour votre projet de conception Web ou d’application mobile.",
                imageSrc: "https://source.unsplash.com/fIq0tET6llw/1280x820"
            },
            {
                title: "Business Plan, Recherche de Financement",
                body: "Après analyse du projet, nous produirons un prototype du projet qui sera validé par le client avant d'aller plus loin.",
                imageSrc: "https://source.unsplash.com/9l_326FISzk/1280x820"
            },
            {
                title: "Veille Strategique et Concurentielle",
                body: "Notre partie préférée, à ce stade, nous allons coder votre site Web / application.",
                imageSrc: "https://source.unsplash.com/esyG2Jt_uIc/1280x820"
            },
            {
                title: "Mise en oeuvre et suivi des Projects d'Entreprises",
                body: "À ce stade, nous créerons du contenu pour votre projet. Ici, nous aurons besoin de toute la documentation que le client peut nous fournir.",
                imageSrc: "https://source.unsplash.com/UiVe5QvOhao/1280x820"
            },
        ]
    }
}

export default IPM