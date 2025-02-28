

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
    return (
        <div>
            <section
                id='home'
                className="pt-28 lg:pt-36"
            >
                <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">


                    <div>
                        <div className="flex items-center gap-3">
                            <figure className="img-box w-9 h-9 rounded-lg">
                                <img
                                    src="./images/ww2.jpg"
                                    width={40}
                                    height={40}
                                    alt="Paul Matthias protrait"
                                    className='img-cover'
                                />
                            </figure>

                            <div className="flex items-center gap-1.5 text-zinc-400 dark:text-black text-sm tracking-wide">
                                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                                </span>

                                Available for work
                            </div>
                        </div>

                        <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                            Building Scalable Mordern Websites for the Future
                        </h2>

                        <div className="flex items-center gap-2">
                            <ButtonPrimary
                                herf="https://drive.google.com/file/d/1kvZZkyOPqVGNb1ehzJtdPUsrHxpiZh3y/view"
                                label="Download CV"
                                icon="download"
                            />

                            <ButtonOutline
                                herf="#about"
                                label="Scroll down"
                                icon="arrow_downward"

                            />
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <figure className="w-full max-w-[480px] ml-auto rounded-[60px] overflow-hidden">
                            <img
                                src="/images/DSC_1143.jpg"
                                alt=""
                                className="lg:w-[30rem] lg:h-[30rem] rounded-full object-cover object-[30%_30%]"
                            />
                        </figure>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Hero
