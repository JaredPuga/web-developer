import { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'

export const NavFloating = () => {

    const [sections] = useState(['main', 'About', 'Skills', 'Works', 'Blogs', 'Contact'])
    const [currentSection, setCurrentSection] = useState(sections[0])


    const handleScroll = () => {

        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionElement = document.getElementById(section)
            if (sectionElement) {
                const sectionTop = sectionElement.offsetTop;
                const sectionBottom = sectionTop + sectionElement.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setCurrentSection(section);
                }
            }
        })
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSection])

    console.log(currentSection)

  return (
    <nav className="hidden fixed top-44 xl:top-32 left-10 xl:left-20 w-14 h-80 bg-bg2 py-5 px-2 text-white rounded-r40 border lg:flex flex-col justify-between">
        <div className={`flex items-center justify-center ${currentSection === 'main' && 'bg-white p-2 rounded-full'}`}>
            <img src={`${currentSection === 'main' ? '/main.svg' : '/main2.svg'}`} alt="main-icon" className="w-4"/>
        </div>

            <LinkScroll activeClass='active' to='About' className={`flex items-center justify-center relative group hover:cursor-pointer text-center font-ubuntu ${currentSection === 'About' && 'bg-white p-2 rounded-full'}`} spy smooth duration={500}>
                <img src={`${currentSection === 'About' ? '/user2.svg' : '/user.svg'}`} alt="user-ico" className="w-4"/>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full ml-6 whitespace-nowrap bg-white text-bg1  text-base px-2 py-3 rounded-lg w-auto h-8 flex items-center font-light">
                    About Me
                </span>
            </LinkScroll>

            <LinkScroll activeClass='active' to='Skills' className={`flex items-center justify-center relative group hover:cursor-pointer text-center font-ubuntu ${currentSection === 'Skills' && 'bg-white p-2 rounded-full'}`} spy smooth duration={500}>
                <img src={`${currentSection === 'Skills' ? '/code2.svg' : '/code.svg'}`} className="w-4"/>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full ml-6 whitespace-nowrap bg-white text-bg1  text-base px-2 py-3 rounded-lg w-auto h-8 flex items-center font-light">
                    Skills
                </span>
            </LinkScroll>

            <LinkScroll activeClass='active' to='Works' className={`flex items-center justify-center relative group hover:cursor-pointer text-center font-ubuntu ${currentSection === 'Works' && 'bg-white p-2 rounded-full'}`} spy smooth duration={500}>
                <img src={`${currentSection === 'Works' ? '/desktop2.svg' : '/desktop.svg'}`} alt="desktop-ico" className="w-4"/>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full ml-6 whitespace-nowrap bg-white text-bg1  text-base px-2 py-3 rounded-lg w-auto h-8 flex items-center font-light">
                    Works
                </span>
            </LinkScroll>

            <LinkScroll activeClass='active' to='Blogs' className={`flex items-center justify-center relative group hover:cursor-pointer text-center font-ubuntu ${currentSection === 'Blogs' && 'bg-white p-2 rounded-full'}`} spy smooth duration={500}>
                <img src={`${currentSection === 'Blogs' ? '/about2.svg' : '/about.svg'}`} alt="about-ico" className="w-4"/>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full ml-6 whitespace-nowrap bg-white text-bg1  text-base px-2 py-3 rounded-lg w-auto h-8 flex items-center font-light">
                    Blogs
                </span>
            </LinkScroll>

            <LinkScroll activeClass='active' to='Contact' className={`flex items-center justify-center relative group hover:cursor-pointer text-center font-ubuntu ${currentSection === 'Contact' && 'bg-white p-2 rounded-full'}`} spy smooth duration={500}>
                <img src={`${currentSection === 'Contact' ? '/mail3.svg' : '/mail2.svg'}`} alt="mail-ico" className="w-4"/>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full ml-6 whitespace-nowrap bg-white text-bg1  text-base px-2 py-3 rounded-lg w-auto h-8 flex items-center font-light">
                    Contact
                </span>
            </LinkScroll>
    </nav>

  )
}
