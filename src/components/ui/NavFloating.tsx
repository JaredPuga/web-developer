import { Link as LinkScroll } from 'react-scroll'

export const NavFloating = () => {
  return (
    <nav className="hidden fixed top-44 xl:top-32 left-10 xl:left-20 w-14 h-80 bg-bg2 py-3 px-2 text-white rounded-r40 border lg:flex flex-col justify-between">
        <div className='flex items-center justify-center bg-white p-2 rounded-full'>
            <img src="/main.svg" alt="main-icon" className="w-4"/>
        </div>

            <LinkScroll activeClass='active' to='About' className="flex items-center justify-center relative group hover:cursor-pointer text-center font-ubuntu" spy smooth duration={500}>
                <img src="/user.svg" alt="user-ico" className="w-4"/>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full ml-6 whitespace-nowrap bg-white text-bg1  text-base px-2 py-3 rounded-lg w-auto h-8 flex items-center font-light">
                    About Me
                </span>
            </LinkScroll>

            <LinkScroll activeClass='active' to='Skills' className="flex items-center justify-center relative group hover:cursor-pointer text-center font-ubuntu" spy smooth duration={500}>
                <img src="/code.svg" alt="code-ico" className="w-4"/>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full ml-6 whitespace-nowrap bg-white text-bg1  text-base px-2 py-3 rounded-lg w-auto h-8 flex items-center font-light">
                    Skills
                </span>
            </LinkScroll>

            <LinkScroll activeClass='active' to='About' className="flex items-center justify-center relative group hover:cursor-pointer text-center font-ubuntu" spy smooth duration={500}>
                <img src="/desktop.svg" alt="desktop-ico" className="w-4"/>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full ml-6 whitespace-nowrap bg-white text-bg1  text-base px-2 py-3 rounded-lg w-auto h-8 flex items-center font-light">
                    Works
                </span>
            </LinkScroll>

            <LinkScroll activeClass='active' to='About' className="flex items-center justify-center relative group hover:cursor-pointer text-center font-ubuntu" spy smooth duration={500}>
                <img src="/about.svg" alt="about-ico" className="w-4"/>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full ml-6 whitespace-nowrap bg-white text-bg1  text-base px-2 py-3 rounded-lg w-auto h-8 flex items-center font-light">
                    Blogs
                </span>
            </LinkScroll>

            <LinkScroll activeClass='active' to='About' className="flex items-center justify-center relative group hover:cursor-pointer text-center font-ubuntu" spy smooth duration={500}>
                <img src="/mail2.svg" alt="mail-ico" className="w-4"/>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full ml-6 whitespace-nowrap bg-white text-bg1  text-base px-2 py-3 rounded-lg w-auto h-8 flex items-center font-light">
                    Contact
                </span>
            </LinkScroll>
    </nav>

  )
}
