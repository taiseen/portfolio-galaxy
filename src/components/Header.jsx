const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 flex items-center justify-between h-[70px] bg-slate-100/10 backdrop-blur-md px-[30px] shadow-lg z-[999] ">

            <div className="flex items-center gap-2">
                {/* <img src="images/miladicode.png" alt="logo" /> */}
                <div className="size-12 rounded-full bg-slate-700"></div>
                <h1>MiladiCode</h1>
            </div>

            <nav className="flex items-center justify-between w-[30%] py-4 px-16 rounded-full bg-slate-700/20 backdrop-blur-md shadow-lg shadow-white/10">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
            </nav>

            <div className="flex items-center gap-5">
                <box-icon type='logo' color='#aaa' name='github'></box-icon>
                <box-icon type='logo' color='#aaa' name='linkedin-square'></box-icon>
                <box-icon type='logo' color='#aaa' name='facebook-square'></box-icon>
                {/* <box-icon name='moon'></box-icon>
                <box-icon name='sun'></box-icon> */}
            </div>
        </header>
    )
}

export default Header