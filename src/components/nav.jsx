import { useState } from "react"

const nav = ({ theme, setTheme }) => {
  const [openNav, setOpenNav] = useState(false)
  const burgerStyling = "w-9 h-1 bg-zinc-400 rounded-md transition-all"
  const openNavStyling = "fixed bg-zinc-800 text-white gap-10 w-1/2 right-0 h-screen top-0 translate-x-0 flex flex-col pt-32 px-8 transition-all"
  const closeNavStyling = "fixed bg-zinc-800 text-white dark:text-black w-1/2 right-0 h-screen top-0 transition-all translate-x-full flex-col pt-32 px-8 lg:translate-x-0 lg:text-sm lg:p-0 lg:h-auto lg:flex lg:gap-10 lg:flex-row lg:static lg:w-auto lg:bg-transparent hover:text-zinc-450"
  const listItemStyling = "hover:text-emerald-200 transition-all"


  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-zinc-850/50 flex justify-between py-5 px-5 items-center lg:max-w-screen-xl lg:mx-auto">
      <h1>
        <a
          href="#"
          className="logo"
        >
          <img
            src="./images/favicon.ico"
            width={40}
            height={40}
            alt="Paul Matthias"
          />
        </a>
      </h1>

      <div className="flex gap-7">
        <ul className={openNav ? openNavStyling : closeNavStyling}>
          <li><a className={listItemStyling} href="#">Home</a></li>
          <li><a className={listItemStyling} href="#about">About</a></li>
          <li><a className={listItemStyling} href="#skill">Skills</a></li>
          <li><a className={listItemStyling} href="#work">Work</a></li>
          <li><a className={listItemStyling} href="#contact">Contact</a></li>
        </ul>


        <div className="text-xl cursor-pointer hover:text-emerald-200">
          <i className={theme ? 'hidden' : 'bx bx-sun'}
            onClick={() => setTheme(true)}></i>
          <i className={theme ? 'bx bx-moon' : 'hidden'}
            onClick={() => setTheme(false)}></i>
        </div>

        <div className="flex flex-col gap-1 z-999 b-burger cursor-pointer lg:hidden" onClick={() => setOpenNav(!openNav)}>
          <div className={openNav ? `${burgerStyling} + bg-white translate-y-[9.1px] rotate-[45deg]` : burgerStyling}></div>
          <div className={openNav ? `${burgerStyling} + bg-white opacity-0` : burgerStyling}></div>
          <div className={openNav ? `${burgerStyling} + bg-white translate-y-[-6.5px] rotate-[-45deg]` : burgerStyling}></div>
        </div>
      </div>
    </div>
  )
}

export default nav
