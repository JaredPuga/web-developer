import { Link, useLocation } from "react-router-dom"
import { Icon, Search } from "../material"

export const Navbar = () => {

  const location = useLocation()

  const name = '<C/> '

  return (
      <header className="border-b mx-auto w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6">
        <div className="flex h-16 lg:h-24 justify-between items-center font-IBM">
          <div className="flex gap-1">
            <h1 className="text-brand1">{name}</h1>
            <h1>SinanTokmak</h1>
          </div>
          <div className="flex justify-center gap-4 items-center ">
            <Link to='/' ><h1 className={`${location.pathname === '/' && 'text-brand1'}`}>Home</h1></Link>  
            <Link to='/blog'><h1 className={`${location.pathname === '/blog' && 'text-brand1'}`}>Blogs</h1></Link>
            <Search />
            <Icon icon="/ig.svg" alt="instagram-icon" text="Instagram"/>
            <Icon icon="/discord.svg" alt="discord-icon" text="Discord"/>
            <Icon icon="/github.svg" alt="github-icon" text="Github"/>
          </div>
        </div>
      </header>
  )
}
