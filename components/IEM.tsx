import { useMemo } from "react"

interface Props {
    locale: string
}

const IEM: React.FC<Props> = ({ locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100 section-base">

            {/* :TITLE CONTAINER */}
            <div className="mx-auto max-w-3xl space-y-3 text-center">
                {/* ::Title */}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-wide relative before:w-16 before:h-16  ">
                    <span className="h-12 w-12 bg-primary absolute rounded-full left-0" />
                    ISMATECH <span className="text-primary">Events</span> Management
                </h2>
                {/* ::Text */}
                <p className="text-sm sm:text-base text-gray-700">Eaque totam placeat fuga neque quam vero. Harum nesciunt voluptate quidem, repudiandae nihil repellendus praesentium impedit sequi non modi ipsa! Libero, nostrum?</p>
            </div>

            <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-3">
                {
                    s.items.map(item => (
                        <div key={item.title} className="flex flex-col px-8 py-6">
                            <img className="rounded-md" src={item.imageSrc} alt="" />
                            <h2 className="title-3 mb-4">{item.title}</h2>
                            <p className="content-3 flex-1 mb-4">{item.body}</p>
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
                imageSrc: "https://source.unsplash.com/UiVe5QvOhao/1280x820"
            },
            {
                title: "Prototyping",
                body: "After analysing the project, we will produce a prototype of the project that will be validated by the client before we go further.",
                imageSrc: "https://source.unsplash.com/UiVe5QvOhao/1280x820"
            },
            {
                title: "Coding",
                body: "Our favourite part, At this point, we will code your software to life.",
                imageSrc: "https://source.unsplash.com/UiVe5QvOhao/1280x820"
            },
            {
                title: "Content Creation",
                body: "At this point, we will create SEO ready content for your website/application. Here we will need all the documentation the client can provide to us.",
                imageSrc: "https://source.unsplash.com/UiVe5QvOhao/1280x820"
            },
        ]
    },
    'fr': {
        items: [
            {
                title: "Organisation des rencontres Internationales",
                body: "C’est là que nous déciderons de la technologie à utiliser pour votre projet de conception Web ou d’application mobile.",
                imageSrc: "/images/hilton.jpg"
            },
            {
                title: "Initiation et organisation sportives",
                body: "Après analyse du projet, nous produirons un prototype du projet qui sera validé par le client avant d'aller plus loin.",
                imageSrc: "/images/olembe.jpg"
            },
            {
                title: "Initiation et Organisation de Rencontres culturelles",
                body: "Notre partie préférée, à ce stade, nous allons coder votre site Web / application.",
                imageSrc: "/images/musee.jpg"
            },
        ]
    }
}

export default IEM