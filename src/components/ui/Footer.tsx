import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className={`bg-bg2 lg:border-t`}>
      <div className="mx-auto my-0 w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6 lg:mt-0 gap-6 flex flex-col border-t lg:border-t-0 items-center py-4 lg:flex-row">
        <div className="flex gap-7 items-center justify-center lg:order-2">
          <Link target="_blank" to="https://www.instagram.com/jaredpuga/"><img src="/ig2.svg" alt="instagram-icon-footer" className="bg-brand2 p-2 rounded-full w-9 hover:cursor-pointer" /></Link>
          <Link target="_blank" to="https://www.linkedin.com/in/jared-puga-contreras-4b243924b/"><img src="/discord2.svg" alt="discord-icon-footer" className="bg-brand2 p-2 rounded-full w-9 hover:cursor-pointer" /></Link>
          <Link target="_blank" to="https://github.com/JaredPuga"><img src="/github2.svg" alt="github-icon-footer" className="bg-brand2 p-2 rounded-full w-9 hover:cursor-pointer" /></Link>
        </div>

        <div className="flex flex-col font-ubuntu text-base gap-4 font-light md:flex-row w-full md:justify-between lg:w-auto lg:flex-grow lg:order-1">
          <p className="md:w-1/2">&copy; 2023 SinanTokmak. All rights reserved</p>

          <div className="flex justify-between md:justify-around items-center md:w-1/2">
            <p className="">Privacy Policy</p>
            <p className="">Terms & Conditions</p>
          </div>
        </div>

        <p className="lg:order-3">Design By <span className="text-brand1 underline hover:cursor-pointer">JaredPuga</span></p>
      </div>
    </div>
  )
}
