import { useMemo } from "react"

interface Props {
    locale: string
}

const ContactUs: React.FC<Props> = ({ locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.5756751657299!2d11.497687022417402!3d3.8863353816348445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf15b89c23d1%3A0x1e9b2b3f1f015c97!2sMassao%20Palace%20Hotel%2C%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1679509806535!5m2!1sfr!2scm"
                        style={{
                            filter: 'grayscale(1) contrast(1.2) opacity(0.4)'
                        }}
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <h3 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Yaounde:</h3>
                            <p className="mt-1">
                                Siège social Ismatech & Ismatech Business School - Tsinga Entrée 8ème (Face Hôtel Massao)
                            </p>
                            <h3 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Garoua:</h3>
                            <p className="mt-1">
                                Représentation du Cabinet - Dérrière SMS Messagerie (Face Hiala Hôtel)
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-primary leading-relaxed">contact@ismatech.org</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">(+237) 690 660 460</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">Button</button>
                    <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
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

export default ContactUs
