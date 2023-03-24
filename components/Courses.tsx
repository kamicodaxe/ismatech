import { useMemo } from "react"
import LearnMore from "./LearnMore"

interface Props {
    locale: string
    extended?: boolean
}

const Courses: React.FC<Props> = ({ locale, extended }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="section-base">

            {/* :TITLE CONTAINER */}
            <div className={`mx-auto max-w-3xl space-y-3 text-center ` + (extended ? 'py-16' : '')}>
                {/* ::Title */}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-wide relative before:w-16 before:h-16  ">
                    <span className="h-12 w-12 bg-primary absolute rounded-full left-0" />
                    Ismatech <span className="text-primary">Business</span> School
                </h2>
                {/* ::Text */}
                <p className="text-sm sm:text-base text-gray-700">Réussir professionnellement avec Ismatech Business School : Des opportunités pour les entreprises et les demandeurs d&apos;emploi !</p>
            </div>

            <div className="container flex flex-col-reverse mx-auto lg:flex-row">

                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
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
                    <LearnMore locale={locale} href='/business-school' />
                </div>
                <div className="lg:w-1/2 xl:w-3/5">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src="/images/ibs.jpg" alt="" className="rounded-lg shadow-lg aspect-video sm:min-h-96" />
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
                title: "Management & Strategies des Entreprises",
                body: `ISMATECH BUSINESS SCHOOL propose un programme de formation complet pour les entreprises et les demandeurs d'emploi qui souhaitent acquérir un avantage concurrentiel dans le domaine du "Management et des stratégies d'entreprise".` // Parfaite pour les chefs de projet souhaitant créer leur propre entreprise, cette formation apporte les connaissances et compétences essentielles pour créer et gérer une entreprise avec succès. En mettant l'accent sur l'application pratique et les scénarios du monde réel, notre programme dote les participants des outils nécessaires pour devenir un chef d'entreprise et un entrepreneur efficace.
            },
            {
                title: "Gestions des Resources Humaines",
                body: "ISMATECH BUSINESS SCHOOL propose une formation complète en gestion des ressources humaines. Grâce à nos cours complets, vous serez en mesure de gérer efficacement le personnel et les processus de recrutement, de fournir une formation et une gestion de carrière efficaces, de mener des évaluations, et bien plus encore."
            },
            {
                title: "Marketing et Veille Strategique",
                body: "ISMATECH BUSINESS SCHOOL est votre partenaire dans le développement et l'amélioration de votre sens du marketing et de l'intelligence stratégique. Nous proposons des programmes de formation complets aux entreprises et aux demandeurs d'emploi, afin de les aider à mieux comprendre le paysage concurrentiel et les stratégies et tactiques nécessaires pour réussir. "
            },
        ]
    },
    'fr': {
        items: [
            {
                title: "Management & Strategies des Entreprises",
                body: `ISMATECH BUSINESS SCHOOL propose un programme de formation complet pour les entreprises et les demandeurs d'emploi qui souhaitent acquérir un avantage concurrentiel dans le domaine du "Management et des stratégies d'entreprise".` // Parfaite pour les chefs de projet souhaitant créer leur propre entreprise, cette formation apporte les connaissances et compétences essentielles pour créer et gérer une entreprise avec succès. En mettant l'accent sur l'application pratique et les scénarios du monde réel, notre programme dote les participants des outils nécessaires pour devenir un chef d'entreprise et un entrepreneur efficace.
            },
            {
                title: "Gestions des Resources Humaines",
                body: "ISMATECH BUSINESS SCHOOL propose une formation complète en gestion des ressources humaines. Grâce à nos cours complets, vous serez en mesure de gérer efficacement le personnel et les processus de recrutement, de fournir une formation et une gestion de carrière efficaces, de mener des évaluations, et bien plus encore."
            },
            {
                title: "Marketing et Veille Strategique",
                body: "ISMATECH BUSINESS SCHOOL est votre partenaire dans le développement et l'amélioration de votre sens du marketing et de l'intelligence stratégique. Nous proposons des programmes de formation complets aux entreprises et aux demandeurs d'emploi, afin de les aider à mieux comprendre le paysage concurrentiel et les stratégies et tactiques nécessaires pour réussir. "
            },
        ]
    }
}

export default Courses