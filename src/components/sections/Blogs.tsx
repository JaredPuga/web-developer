import { Title } from "./homepage"

export const Blogs = () => {
  return (
    <div className="bg-bg1 pb-10" id="Blogs">
      <div className="mx-auto my-0 w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6 lg:mt-0 gap-6 flex flex-col">
        <Title title="Blogs" text="My thoughts on technology and business, welcome to subscribe" b/>
        
        <div className="border-y py-8 ">
          <div className="flex flex-col md:flex-row justify-center font-ubuntu gap-7 pl-3">
            <img src="/blog1.jpg" alt="blog1-img" className="w-32 self-center md:self-start lg:w-60 lg:self-center"/>

            <div className="flex flex-col gap-7">
              <h1 className="text-3xl text-brand1">What does it take to become a web developer?</h1>
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

        <div className="flex font-ubuntu items-center justify-center gap-4">
          <button className="bg-brand1 text-xl text-black font-normal rounded-3xl py-2 px-4">
            View More
          </button>
          <button className="text-xl text-white border-brand1 border font-normal rounded-3xl py-2 px-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
