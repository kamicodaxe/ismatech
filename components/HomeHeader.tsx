import { CarouselProvider, Dot, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useMemo } from "react";
import NavBar from "./NavBar";

interface Props {
    active: string
    locale: string
}

const HomeHeader: React.FC<Props> = ({ active, locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <header className="bg-cover bg-coolGray-800 text-coolGray-100  relative">
            {/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div> */}
            <NavBar active={active} locale={locale} />

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={4}
                isPlaying
            >
                <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-1 lg:flex-col">
                            <Dot slide={0}>
                                <button className="w-3 h-3 mx-2 bg-primary rounded-full lg:mx-0 focus:outline-none"></button>
                            </Dot>
                            <Dot slide={1}>
                                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-primary"></button>
                            </Dot>
                            <Dot slide={2}>
                                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-primary"></button>
                            </Dot>
                            <Dot slide={3}>
                                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-primary"></button>
                            </Dot>
                        </div>

                        <div className="max-w-lg lg:mx-12 lg:order-2 lg:mt-16">
                            <div className='w-2' />
                            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-6xl">
                                L&apos;essentiel du conseil en management
                            </h1>
                            <Slider className='max-h-48'>
                                <Slide index={0}>
                                    {/* <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                                        L'essentiel du conseil en management
                                    </h1> */}
                                    <p className="content-3 mt-4 text-gray-600 dark:text-gray-300">
                                        Le développement de l&apos;Afrique ne se fera que par la volonté, les compétences et le Dynamisme des Africains eux-mêmes
                                    </p>
                                </Slide>
                                <Slide index={1}>
                                    <p className="content-3 mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                                </Slide>
                                <Slide index={2}>
                                    <p className="content-3 mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                                </Slide>
                                <Slide index={3}>
                                    <p className="content-3 mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                                </Slide>
                            </Slider>

                            {/* <p className="content-3 mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p> */}
                            {/* <div className="mt-6">
                                <a href="#" className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">Download from App Store</a>
                            </div> */}
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full max-w-2xl rounded-md" src="/images/home.jpg" alt="apple watch photo" />
                    </div>
                </div>
            </CarouselProvider>



        </header>
    )
}

const strings = {
    'en': {
        title: "ISMATECH - L'essentiel du conseil en management",
        desc: "ISMATECH - L'essentiel du conseil en management",
    },
    'fr': {
        title: "ISMATECH - L'essentiel du conseil en management",
        desc: "ISMATECH - L'essentiel du conseil en management",
    }
}

export default HomeHeader