const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-between">

            <div className="absolute left-20">

                <div className="flex items-center gap-2 bg-indigo-400/20 text-indigo-400 py-2 px-2 border border-indigo-400/40 w-[270px] rounded-full shadow-[0_0_5px_rgba(0,0,0,0.25)]">
                    <box-icon type="logo" color="#727fde" name="sketch"></box-icon>
                    Front-end Developer Portfolio
                </div>

                <div>
                    <h1 className="text-6xl font-bold max-w-[600px] leading-20 mt-10 mb-8">
                        Providing <span className="gradient-text">the best</span> Project{" "}
                        <span className="gradient-text">Experience</span>
                    </h1>


                    <p className="max-w-[550px] leading-9 text-xl mb-10">
                        I'm a Front-end developer with experience in website, mobile, and software development.
                        Check out my skills and projects.
                    </p>

                    <div className="mt-6 space-x-4">
                        <button className="flex items-center gap-4 text-white py-[15px] px-[35px] rounded-lg bg-indigo-400/20 border border-indigo-400/40 shadow-2xl hover:shadow-[0_0_15px_#727fde86] cursor-pointer">
                            <box-icon name="send" color="#aaa"></box-icon>
                            <span>Contact Me</span>
                        </button>

                        {/* <button className="flex items-center space-x-2 bg-gray-500 text-white py-2 px-4 rounded">
                <i className="bx bx-download"></i>
                <span>Download CV</span>
            </button> */}
                    </div>
                </div>

            </div>

            <div className="absolute right-20">
                <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    className="h-[900px] mix-blend-difference"
                    src="/hero-video.mp4"
                />
            </div>

            <div
                className="border-2 border-slate-600 rounded-full cursor-pointer shadow-md
                 absolute left-[49%] bottom-[8%] w-9 h-16 flex items-center justify-center 
                 before:content-[''] before:absolute before:border-2 before:border-slate-400 
                 before:w-2.5 before:h-2.5 before:border-t-transparent before:border-l-transparent 
                 before:transform before:left-1/2 before:-translate-x-1/2 before:translate-y-[-100%] 
                 before:rotate-45 before:top-[20%] before:animate-topDown 
                 after:content-[''] after:absolute after:border-2 after:border-slate-400 
                 after:w-2.5 after:h-2.5 after:border-t-transparent after:border-l-transparent 
                 after:transform after:left-1/2 after:-translate-x-1/2 after:translate-y-[-50%] 
                 after:rotate-45 after:top-[30%] after:animate-topDown after:delay-500"
            >
            </div>

        </section>
    );
};

export default Hero;
