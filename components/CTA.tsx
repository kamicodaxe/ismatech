import { useRouter } from "next/router"
import { useMemo } from "react"

const CTA: React.FC<{}> = ({ }) => {
    const { locale } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="py-6 bg-primary dark:bg-violet-400 dark:text-gray-900">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                {/* :TITLE CONTAINER */}
                <div className="mx-auto max-w-3xl space-y-3 text-center">
                    {/* ::Title */}
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-wide relative before:w-16 before:h-16  ">
                        <span className="h-12 w-12 bg-white absolute rounded-full left-0" />
                        Besoin d&apos;un <span className="text-white">rendez-vous?</span>
                    </h2>
                    {/* ::Text */}
                    <p className="text-sm sm:text-base text-gray-100 leading-8">Eaque totam placeat fuga neque quam vero. Harum nesciunt voluptate quidem, repudiandae nihil repellendus praesentium impedit sequi non modi ipsa! Libero, nostrum?</p>
                </div>

                <button type="button"
                    className="px-8 py-3 m-2 text-lg border rounded text-gray-800 bg-white border-white hover:bg-gray-200 hover:border-gray-200  text-coolGray-50 border-coolGray-700">
                    {s.quote}
                </button>
            </div>
        </section>
    )
}

const strings = {
    'en': {
        freequote: "Free quote",
        quote: "Request a quote",
    },
    'fr': {
        freequote: "Dévis Gratuit",
        quote: "Demandez un rdv",
    }
}

export default CTA