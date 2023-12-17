import { useEffect } from "react"
import { MainLayout } from "../components/layouts"
import { AboutMe, HeaderHero, Skills } from "../components/sections"
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
    </MainLayout>
  )
}


