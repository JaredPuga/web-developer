import { Link } from "react-router-dom"

export const Navbar = () => {

  const name = '<C/> '

  return (
    <>
      <header className="border-b-2">
        <div className="flex h-16 justify-between items-center font-mono">
          <div className="flex gap-1">
            <h1 className="text-brand1">{name}</h1>
            <h1>SinanTokmak</h1>
          </div>
          <div className="flex">
            <Link to='/'><h1>Home</h1></Link>  
            <Link to='/blog'><h1>Blogs</h1></Link>    
          </div>
        </div>
      </header>

    </>
  )
}
