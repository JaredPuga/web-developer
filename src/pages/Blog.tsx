import { useEffect } from "react"
import { MainLayout } from "../components/layouts"


export const Blog = () => {

  useEffect(() => {
    document.title = 'Blogs'
  }, [])

  return (
    <MainLayout>
      <h1>Blog</h1>
    </MainLayout>
  )
}
