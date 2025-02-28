


const aboutItems = [

    {
        label: 'Projects done',
        number: 10
    },

    {
        label: 'Years of experience',
        number: 3
    }
];


const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">

                <div className="bg-zinc-800/50 dark:bg-slate-200 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinz-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos;m Paul Matthias, a qualified web developer with a talent for creating aesthetically beautiful and incredibly useful websites. fusing technological know-how with creativity. I turn your idea into a digital masterpiece that is exceptional in both beauty and functionality.

                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-emerald-300 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400 dark:text-black">{label}</p>
                                </div>
                            ))
                        }

                        <img
                            src="/images/favicon.ico"
                            alt="logo"
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
