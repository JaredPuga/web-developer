import { useEffect } from "react"
import { MainLayout } from "../components/layouts"
import { Blog } from "../components/ui"

export const BlogMain = () => {

    useEffect(() => {
        document.title = 'What does it take to become a web developer?'
    }, [])
    

  return (
    <MainLayout>
        <div className="mx-auto my-0 w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6 lg:mt-0 gap-6 flex flex-col">
            <div className="flex flex-col gap-8 lg:mx-72 mb-40">
                <h1 className="font-ubuntu text-3xl text-brand1 pt-12 pb-4">
                What does it take to become a web developer?
                </h1>

                <div className="flex gap-7 border-y py-2 px-3 justify-center items-center md:justify-between">
                    <div className="flex gap-2 text-sm">
                        <p className="font-medium">Text</p>
                        <p className="font-light">Sinan</p>
                        <p className="font-medium">Date</p>
                        <p className="font-light">10.Oct 2023</p>
                        <p className="font-medium">Read</p>
                        <p className="font-light">1 min</p>
                    </div>
                    <div className="hidden md:flex bg-brand2 rounded-full p-2 px-3 text-center text-sm">
                        <img src="/share.svg" />
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <img src="/blog2.jpg" className="w-11/12"/>
                </div>

                <div className="text-base font-light">
                    <p>Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet. It involves various specialized fields, 
                        each with its own set of skills and techniques. While some individuals might view web development as a holistic process, it can be broken down into several key areas that are essential 
                        for building a functional and visually appealing website.
                        <br />
                        <br />
                        <span className="text-brand1">Frontend Development:</span>
                        <br />
                        <br />
                        Frontend development focuses on the user-facing aspects of a website. It involves creating the visual elements that users interact with directly. Frontend developers use a combination of 
                        languages such as HTML, CSS, and JavaScript to build and style the layout, design, and interactivity of the website. They need to have a strong understanding of user experience (UX) and 
                        user interface (UI) design to ensure that the website is both aesthetically pleasing and user-friendly. 
                        <br />
                        <br />
                        <span className="text-brand1">Backend Development:</span>
                        <br />
                        <br />
                        Backend development involves the behind-the-scenes functionality of a website. It includes server-side scripting, databases, and the logic that operates behind the scenes to ensure that the 
                        frontend works smoothly. Backend developers work with programming languages such as Ruby, Python, PHP, and Java, and frameworks such as Node.js, Django, and Laravel. They are responsible for
                        building and maintaining the server, application, and database that power the website.
                        <br />
                        <br />
                        <span className="text-brand1">DevOps (Development and Operations): </span>
                        <br />
                        <br />
                        DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). DevOps professionals work to shorten the systems development life cycle and provide continuous 
                        delivery with high software quality. They utilize various tools to automate the software development process, including coding, building, testing, and deployment. DevOps engineers often work 
                        closely with both frontend and backend developers to ensure a smooth and efficient development and deployment process.
                        <br />
                        <br />
                        <span className="text-brand1">Desing: </span>
                        <br />
                        <br />
                        Design is a crucial aspect of web development that focuses on creating visually appealing and intuitive interfaces. Web designers use their creative skills to develop the overall look and 
                        feel of a website. They work with graphic design tools and software to create layouts, color schemes, typography, and other visual elements that contribute to the overall user experience. 
                        Good design is essential for attracting and retaining users on a website.
                        <br />
                        <br />
                        Understanding and mastering these four key areas of web development can open up numerous career opportunities in the ever-evolving field of technology. It is important for web developers 
                        to stay updated with the latest trends and technologies and continuously enhance their skills to build innovative and high-quality websites that meet the needs of modern users.
                    </p>
                </div>

                <div className="flex flex-wrap gap-6">
                    <div className="bg-gray-600 rounded-2xl py-1 w-32 text-center text-sm"> Web Developer</div>
                    <div className="bg-gray-600 rounded-2xl py-1 w-32 text-center text-sm"> Web Developer Job</div>
                    <div className="bg-gray-600 rounded-2xl py-1 w-32 text-center text-sm"> Web Development</div>
                </div>

                <div className="flex gap-7 border-y py-2 px-3 justify-center items-center md:justify-between">
                    <div className="flex gap-2 text-sm">
                        <p className="font-medium">Text</p>
                        <p className="font-light">Sinan</p>
                        <p className="font-medium">Date</p>
                        <p className="font-light">10.Oct 2023</p>
                        <p className="font-medium">Read</p>
                        <p className="font-light">1 min</p>
                    </div>
                    <div className="hidden md:flex bg-brand2 rounded-full p-2 px-3 text-center text-sm">
                        <img src="/share.svg" />
                    </div>
                </div>

                <div className="py-3 border-brand1 border-2 px-6 rounded-r32 self-center">
                    Subscribe My Blogs
                </div>
            </div>

            <div className="flex flex-col mb-16 lg:mx-60">
                <h1 className="text-brand1 text-3xl text-center border-b pb-8 md:text-6xl">You might also like</h1>
                <div className="flex flex-col">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </div>
        </div>
    </MainLayout>
  )
}
