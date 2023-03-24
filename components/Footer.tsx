import Link from 'next/link'
import { useMemo } from "react"

const routes = [
    {
        name: {
            en: "Our Work",
            fr: "Projets"
        },
        path: "/projects"
    },
    {
        name: {
            en: "Blog",
            fr: "Blog",
        },
        path: "/blog"
    },
    {
        name: {
            en: "Contact",
            fr: "Contact",
        },
        path: "/contact"
    }
]

const Footer: React.FC<{ locale: string }> = ({ locale }) => {
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    return (
        <footer className="px-4 divide-y bg-primary">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <Link href="/" className="flex justify-center space-x-3 lg:justify-start pb-4">
                        {/* <div className="flex items-center justify-center w-12 h-12 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full">
                                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                            </svg>
                        </div> */}
                        <span className="title-1 self-center text-2xl font-semibold">CABINET ISMATECH SARL</span>
                    </Link>

                    <div className="relative flex flex-wrap pb-4">
                        <div className="">
                            <h4 className="title-4">Yaounde:</h4>
                            <p className="mt-1">
                                Siège social Ismatech & Ismatech Business School - Tsinga Entrée 8ème (Face Hôtel Massao)
                            </p>
                        </div>
                        <div className="py-2">
                            <h4 className="title-4">Garoua:</h4>
                            <p className="mt-1">
                                Représentation du Cabinet - Dérrière SMS Messagerie (Face Hiala Hôtel)
                            </p>
                        </div>
                        <div className="py-2 pr-4">
                            <h4 className="title-4">EMAIL:</h4>
                            <p className="mt-1">
                                contact@ismatech.org
                            </p>
                        </div>
                        <div className="py-2">
                            <h4 className="title-4">PHONE:</h4>
                            <p className="mt-1">
                                (+237) 690 660 460
                            </p>
                        </div>

                    </div>

                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="title-3 uppercase">Links</h3>
                        <ul className="space-y-1 content-2">
                            <li>
                                <Link href="/business-school">Ismatech Business School</Link>
                            </li>
                            <li>
                                <Link href="/business-management">Ismatech Business Management</Link>
                            </li>
                            <li>
                                <Link href="/projects-management">Ismatech Projects Management</Link>
                            </li>
                            <li>
                                <Link href="/events-management">Ismatech Events Management</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="title-3 uppercase">Business School</h3>
                        <ul className="space-y-1 content-2">
                            <li>
                                <Link href="/business-school">Management & Strategies Des Entreprises</Link>
                            </li>
                            <li>
                                <Link href="/business-school">Gestions Des Resources Humaines</Link>
                            </li>
                            <li>
                                <Link href="/business-school">Marketing Et Veille Strategique</Link>
                            </li>
                            <li>
                                <Link href="/business-school">Comptabilité Informatisée De Gestion</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="title-3 uppercase">Business Management</h3>
                        <ul className="space-y-1 content-2 text-black">
                            <li>
                                <Link href="/business-management">Management & Strategies Des Entreprises</Link>
                            </li>
                            <li>
                                <Link href="/business-management">Gestions Des Resources Humaines</Link>
                            </li>
                            <li>
                                <Link href="/business-management">Marketing Et Veille Strategique</Link>
                            </li>
                            <li>
                                <Link href="/business-management">Comptabilité Informatisée De Gestion</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="title-3 uppercase">Social media</div>
                        <div className="flex flex-col justify-start space-x-3">
                            <a target="_blank" href='https://wwww.facebook.com/cabinetismatechsarl' title="Facebook" className="flex items-center p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 mr-2 fill-current">
                                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                </svg>
                                <p className="content-2">cabinetismatechsarl</p>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center">
                <p>© 2023 Cabinet Ismatech Sarl. All rights reserved.</p>
                <p>Coded with ❤️ by <a href="https://bogital.com">Bogital</a></p>
            </div>
        </footer>
    )
}


export default Footer