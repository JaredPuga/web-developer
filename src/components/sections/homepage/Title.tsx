interface TitleProps {
    title: string;
    text: string;
    b?: boolean;
    w?: boolean;
}

export const Title = ({title, text, b, w}:TitleProps) => {

    const text1 = "</>"

  return (
    <>
        <div className="hidden lg:flex justify-center items-center">
            <div className="flex justify-center items-center flex-col gap-4 pt-10 flex-grow">
              <img src="/mouse.svg" alt="mouse-ico" className="w-7"/>
              <img src="/Line.svg" alt="line-ico" className="w-2"/>
            </div>
            <p className={`${b! && 'hidden'} absolute font-ubuntu text-9xl right-28 text-brand1`}>{text1}</p>
        </div>


        <div className="flex flex-col items-center justify-center pt-10 lg:pt-0 gap-4">
        <div>
            <h1 className="text-brand1 font-ubuntu text-6xl text-center">{title}</h1>
            <img src="/Line22.svg" className={`${w ? 'w-52' : 'w-auto'}`}/>
        </div>
        <p className="font-IBM text-base text-center">
            {text}
        </p>
        </div>
    </>
  );
};
