import { Title } from "./homepage"

export const Skills = () => {

  return (
    <div className="bg-cover bg-center h-auto bg-opacity-70 pb-10" id="Skills"  style={{ backgroundImage: "url('/back2.jpeg')"}}>
      <div className="mx-auto my-0 w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6 lg:mt-0">
        <div className="flex flex-col gap-8">

          
          <Title title="Skills" text="I am striving to never stop learning and improving" />

            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
              <div className="bg-brand2 flex flex-col font-IBM text-black items-center justify-around h-32 rounded-lg border-l-8 border-css md:p-10">
                <img src="/desktop2.svg" className="w-8"/>
                <p className="text-2xl">Web Developement</p>
                <p className="text-base">HTML · CSS · JS · React</p>
              </div>

                <div className="bg-brand2 flex flex-col font-IBM text-black items-center justify-around h-32 rounded-lg border-l-8 border-css md:p-10">
                  <img src="/mobile.svg" className="w-5"/>
                  <p className="text-2xl">App Developement</p>
                  <p className="text-base">iOS · Android</p>
                </div>
              </div>


            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className={`bg-html p-6 rounded-full`}>
                  <img src='/html.svg' className="w-11" />
                </div>
                <p className={`text-3xl font-IBM text-html`}>HTML</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <div className={`bg-css p-6 rounded-full`}>
                  <img src='/css.svg' className="w-11" />
                </div>
                <p className={`text-3xl font-IBM text-css`}>CSS</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <div className={`bg-js p-6 rounded-full`}>
                  <img src='/js.svg' className="w-11" />
                </div>
                <p className={`text-3xl font-IBM text-js`}>JS</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <div className={`bg-react p-6 rounded-full`}>
                  <img src='/react.svg' className="w-11" />
                </div>
                <p className={`text-3xl font-IBM text-react`}>REACT</p>
              </div>
            </div>
          

        </div>
      </div>
    </div>
  )
}
