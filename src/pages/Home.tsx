import { useEffect } from "react"
import { MainLayout } from "../components/layouts"
import { HeaderHero } from "../components/sections"

export const Home = () => {

  useEffect(() => {
    document.title = 'Home'
  }, [])
  

  return (
    <MainLayout>
      <HeaderHero />
    </MainLayout>
  )
}


