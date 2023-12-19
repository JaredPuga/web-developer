import { useEffect } from "react"
import { MainLayout } from "../components/layouts"
import { Blog } from "../components/ui"


export const Blogs = () => {

  useEffect(() => {
    document.title = 'Blogs'
  }, [])

  return (
    <MainLayout>
      <div className="mx-auto mt-10 my-0 w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6">
        <div className="flex flex-col gap-8 items-center justify-center border-b pb-10">
          <div className="flex flex-col items-center justify-center pt-5 lg:pt-0 gap-4">
            <div>
                <h1 className="text-brand1 font-ubuntu text-6xl text-center">Blogs</h1>
                <img src="/Line22.svg" />
            </div>
            <p className="font-IBM text-base text-center">
              My thoughts on technology and business, welcome to subscribe
            </p>
          </div>

          <div className="py-3 border-brand1 border-2 px-6 rounded-r32">
            Subscribe My Blogs
          </div>
        </div>

        <div className="pb-10 flex flex-col">
          <Blog />
          <Blog />
        </div>

      </div>
    </MainLayout>
  )
}
