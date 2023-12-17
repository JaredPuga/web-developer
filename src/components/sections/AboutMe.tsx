interface TextProps {
  text: string;
}

const Text = ({text}:TextProps) => {
  return (
    <span className="text-brand1 text-base">{text}</span>
  )
}

export const AboutMe = () => {
  
  const textp = '<p>'
  const textp2 = '</p>'

  return (
    <div className="bg-cover bg-center h-auto" style={{ backgroundImage: "url('/back1.jpg')" }}>
      <div className="mx-auto mt-10 my-0 w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6 pt-10" id="About">
          <div className="w-full flex justify-center items-center flex-col gap-4">
            <img src="/mouse.svg" alt="mouse-ico" className="w-7"/>
            <img src="/Line.svg" alt="line-ico" className="w-2"/>
          </div>
        <div className="flex flex-col xl:flex-row justify-around items-center gap-6 py-8">
          <div className="flex flex-col justify-around items-center gap-6 py-8">
          <div className="flex flex-col md:self-start md:pl-32">
            <div className="bg-bg1 border-4 border-brand1 flex justify-start rounded-tl-r40 rounded-br-r40 py-6 px-10">
              <h1 className="font-ubuntu font-normal md:text-6xl text-3xl">About Me</h1>
            </div>
          </div>
          <div className="md:pl-32">
            <div className="bg-bg1 rounded-r40 w-full py-6 px-10 ">
              <p className="font-IBM text-brand2 font-normal text-sm w-full">{textp}</p><br />
              <section className="font-IBM text-brand2 font-normal w-full">
                <h2 className="text-brand1 text-3xl">Hello!</h2>
                <p className="text-base text-white">My name is Sinan and I specialize in web developement that utilizes <Text text="HTML"/>, <Text text="CSS"/>, <Text text="JS"/>, and {<Text text="React"/>} etc. <br /><br />
                I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving. <br /><br />
                When I'm not coding, I am <Text text="writing blogs"/>, reading, or or picking up some new hands-on art project like <Text text="photography"/>. <br /><br />
                I like to have my perspective and belief systems challenged so that I see the world through new eyes.<br /><br />
                </p>
              </section>
              <p className="font-IBM text-brand2 font-normal text-sm w-full">{textp2}</p>
            </div>
          </div>
          </div>

          <img src="/dev1.png" className="w-96"/>

        </div>
      </div>
    </div>
  );
};
