
interface SkillProps {
  title: string;
  icon: string;
  color: string;
}

const Skill = ({title, icon, color}:SkillProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`bg-${color} p-6 rounded-full`}>
        <img src={icon} className="w-11" />
      </div>
      <p className={`text-3xl font-IBM text-${color}`}>{title}</p>
    </div>
  )
}

export const Skills = () => {
  return (
    <div className="bg-cover bg-center h-auto bg-opacity-70 pb-10" id="Skills"  style={{ backgroundImage: "url('/back2.jpg')"}}>
      <div className="mx-auto my-0 w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6 lg:mt-0">
        <div className="flex flex-col gap-8">

          <div className="flex flex-col items-center justify-center  pt-10">
            <h1 className="text-brand1 font-ubuntu text-6xl">Skills</h1>
            <img src="/Line22.svg"/>
            <p className="font-IBM text-base text-center">I am striving to never stop learning and improving</p>
          </div>

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
              {/* Elemento 1 */}
              <Skill title="HTML" icon="/html.svg" color="html"/>

              <Skill title="CSS" icon="/css.svg" color="css"/>

              <Skill title="JS" icon="/js.svg" color="js"/>

              <Skill title="React" icon="/react.svg" color="react"/>
            </div>
          

        </div>
      </div>
    </div>
  )
}
