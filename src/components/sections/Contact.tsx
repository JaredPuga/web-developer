import { Title } from "./homepage"

export const Contact = () => {
  return (
    <div className="bg-bg2 pb-10" id="Contact">
      <div className="mx-auto my-0 w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6 lg:mt-0 gap-6 flex flex-col">
        <Title title="Contact" text="I'm currently available for freelance work" b w/>
        
        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-10">
            <div className="border-brand1 border-2 text-brand1 text-2xl text-center w-auto rounded-customR2 py-4 px-10 md:text-3xl">
              Send Me A Message
            </div>

            <div className="grid grid-cols-2 grid-rows-2 font-ubuntu gap-6 w-full">

              <div className="flex flex-col gap-2 col-span-1 row-span-1">
                <p className="text-brand1 text-base">Your name *</p>
                <input className="placeholder:text-white bg-bg2 border-b border-b-brand2 py-1" placeholder="Enter your name" />
              </div>

              <div className="flex flex-col gap-2 col-span-1 row-span-1">
                <p className="text-brand1 text-base">Your email *</p>
                <input className="placeholder:text-white bg-bg2 border-b border-b-brand2 py-1" placeholder="Enter your email" />
              </div>

              <div className="flex flex-col gap-2 col-span-2 row-span-1">
                <p className="text-brand1 text-base">Your message *</p>
                <input className="placeholder:text-white bg-bg2 border-b border-b-brand2 py-1" placeholder="Enter your needs" />
              </div>

            </div>

            <div className="flex justify-center bg-brand1 text-black py-3 px-9 rounded-3xl text-xl hover:cursor-pointer items-center gap-2">
              <button className="">Send Message</button>
              <img src="/dm.svg"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
