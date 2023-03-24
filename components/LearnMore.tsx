import Link from "next/link"
import { useMemo } from "react"

interface Props {
    locale: string
    href: string
}

const LearnMore: React.FC<Props> = ({ locale, href }) => {
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]
    return (
        <Link className="inline-flex items-center space-x-2 text-sm dark:text-violet-400" href={href}>
            <div className="inline-flex items-center space-x-2 text-sm dark:text-violet-400 cursor-pointer hover:text-primary">
                <span>{s}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </div>
        </Link>
    )
}

const strings = {
    'en': "Learn More",
    'fr': "En savoir plus"
}

export default LearnMore