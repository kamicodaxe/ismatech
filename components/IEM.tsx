import { useMemo } from "react"
import LearnMore from "./LearnMore"

interface Props {
    locale: string
    extended?: boolean
}

const IEM: React.FC<Props> = ({ locale, extended }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="m-4 md:m-8 section-base">

            {/* :TITLE CONTAINER */}
            <div className={`mx-auto max-w-3xl space-y-3 text-center ` + (extended ? 'py-16' : '')}>
                {/* ::Title */}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-wide relative before:w-16 before:h-16  ">
                    <span className="h-12 w-12 bg-primary absolute rounded-full left-0" />
                    ISMATECH <span className="text-primary">Events</span> Management
                </h2>
                {/* ::Text */}
                <p className="text-sm sm:text-base text-gray-700">Le succès à l&apos;échelle mondiale grâce à Ismatech Events Management : Des solutions professionnelles pour les réunions internationales, les événements sportifs et culturels !</p>
            </div>

            <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-3">
                {
                    s.items.map(item => (
                        <div key={item.title} className="flex flex-col px-8 py-6">
                            <img className="rounded-md" src={item.imageSrc} alt="" />
                            <h2 className="title-3 mb-4">{item.title}</h2>
                            <p className="content-3 flex-1 mb-4">{item.body}</p>
                            <LearnMore href="/events-management/slug" locale={locale} />
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
                body: "L'organisation de réunions internationales peut être une tâche intimidante, mais avec une planification et une coordination adéquates, elle peut être couronnée de succès. ",
                imageSrc: "/images/hilton.jpg"
            },
            {
                title: "Initiation et organisation sportives",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id erat et mauris feugiat porttitor eu id justo. Cras efficitur gravida ultricies. Quisque eget ex vel tortor euismod viverra.",
                imageSrc: "/images/olembe.jpg"
            },
            {
                title: "Initiation et Organisation de Rencontres culturelles",
                body: "Ut congue non lectus a fringilla. Praesent egestas aliquam ipsum non tincidunt. Donec vel placerat dui. Duis facilisis mauris sed tellus rutrum, auctor luctus ipsum ornare.",
                imageSrc: "/images/musee.jpg"
            },
        ]
    }
}

export default IEM