import { useEffect } from "react"
import { MainLayout } from "../components/layouts"


export const Blog = () => {

  useEffect(() => {
    document.title = 'Blogs'
  }, [])

  return (
    <MainLayout>
      <div className="mx-auto mt-10 my-0 w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6 pt-10" id="About">
        
      </div>
    </MainLayout>
  )
}
