import { Link } from "react-router-dom"

export const Blog = () => {
  return (
    <div className="border-b py-8 ">
          <div className="flex flex-col md:flex-row justify-center font-ubuntu gap-7 pl-3">
            <img src="/blog1.jpg" alt="blog1-img" className="w-32 self-center md:self-start lg:w-60 lg:self-center"/>

            <div className="flex flex-col gap-7">
              <Link to='/blogs/1' className="hover:cursor-pointer hover:underline"><h1 className="text-3xl text-brand1">What does it take to become a web developer?</h1></Link>
              <p className="text-base">
              Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…
              </p>
              <div className="flex items-center  gap-1 text-brand1">
                <p className="border-b">Read More</p>
                <p>&gt; &gt;</p>
              </div>
              <div className="flex flex-col gap-7 md:flex-row md:items-center">
                <div className="bg-gray-600 rounded-2xl py-1 w-32 text-center text-sm"> Web Developer</div>
                <div className="flex gap-2 text-sm">
                  <p className="font-medium">Text</p>
                  <p className="font-light">Sinan</p>
                  <p className="font-medium">Date</p>
                  <p className="font-light">10.Oct 2023</p>
                  <p className="font-medium">Read</p>
                  <p className="font-light">1 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
