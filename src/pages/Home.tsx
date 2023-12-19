import { useEffect } from "react"
import { MainLayout } from "../components/layouts"
import { AboutMe, Blogs, Contact, HeaderHero, Skills, Works } from "../components/sections"
import { NavFloating } from "../components/ui"

export const Home = () => {

  useEffect(() => {
    document.title = 'Home'
  }, [])
  

  return (
    <MainLayout>
      <NavFloating />
      <HeaderHero />
      <AboutMe />
      <Skills />
      <Works />
      <Blogs />
      <Contact />
    </MainLayout>
  )
}


