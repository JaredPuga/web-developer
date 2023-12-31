import { Title } from "./homepage";

export const Works = () => {
  return (
    <div className="bg-bg2 pb-10" id="Works">
      <div className="mx-auto my-0 w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6 lg:mt-0 gap-4 flex flex-col">
        <Title
          title="Works"
          text="I had the pleasure of working with these awesome projects"
          b
        />

        <div className="flex items-center justify-center gap-2">
          <div className="bg-bg1 p-4 rounded-full hover:cursor-pointer">
            <img src="/arrow1.svg" className="w-2" />
          </div>

          <div className="flex">
            <div>
              <img src="/web6.png" className="w-56"/>
            </div>

            <div className="flex flex-col">
              <div className="text-white text-center">
                <div className="flex justify-center items-center gap-1 hover:cursor-pointer">
                  <p className="text-base font-IBM font-normal text-brand1 border-b-2">View Website</p>
                  <img src="/pointer.svg" alt="pointer-ico" className="w-4 self-end"/>
                </div>
              </div>

              <div className="text-white text-center">
                <img src="/web5.png" className="w-96"/>
              </div>
            </div>
          </div>

          <div className="bg-bg1 p-4 rounded-full hover:cursor-pointer">
            <img src="/arrow2.svg" className="w-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
