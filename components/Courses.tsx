import { useMemo } from "react"

interface Props {
    locale: string
}

const Courses: React.FC<Props> = ({ locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 section-base">

            {/* :TITLE CONTAINER */}
            <div className="mx-auto max-w-3xl space-y-3 text-center">
                {/* ::Title */}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-wide relative before:w-16 before:h-16  ">
                    <span className="h-12 w-12 bg-primary absolute rounded-full left-0" />
                    Ismatech <span className="text-primary">Business</span> School
                </h2>
                {/* ::Text */}
                <p className="text-sm sm:text-base text-gray-700">Eaque totam placeat fuga neque quam vero. Harum nesciunt voluptate quidem, repudiandae nihil repellendus praesentium impedit sequi non modi ipsa! Libero, nostrum?</p>
            </div>

            <div className="container flex flex-col-reverse mx-auto lg:flex-row">

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
                </div>
                <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src="/images/ibs.jpg" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
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
        ]
    },
    'fr': {
        items: [
            {
                title: "Management & Strategies des Entreprises",
                body: "Le management et les strategies d'entreprises est une filière destinée aux jeunes cadres et porteurs"
            },
            {
                title: "Gestions des Resources Humaines",
                body: "Après analyse du projet, nous produirons un prototype du projet qui sera validé par le client avant d'aller plus loin."
            },
            {
                title: "Marketing et Veille Strategique",
                body: "Notre partie préférée, à ce stade, nous allons coder votre site Web / application."
            },
            {
                title: "Comptabilité Informatisée de Gestion",
                body: "À ce stade, nous créerons du contenu pour votre projet. Ici, nous aurons besoin de toute la documentation que le client peut nous fournir."
            },
        ]
    }
}

export default Courses