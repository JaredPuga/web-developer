import { Card, Data, Text } from "./homepage";

export const HeaderHero = () => {
  return (
    <div className="mx-auto mt-10 my-0 w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6 lg:mt-0" id="main">
      <h1 className="hidden xl:block lg:block text-9xl font-ubuntu text-center py-10 text-brand2">
        Developer
      </h1>
      <div className="flex flex-col xl:flex-row xl:justify-between items-center justify-center xl:gap-20">
        <div className="xl:w-1/5 flex items-center justify-center">
          <Card />
        </div>

        <div className="flex justify-start md:justify-around xl:w-4/5 flex-wrap lg:flex-nowrap items-start gap-20 sm:gap-0 my-10">
          <Text />
          <div className="w-full flex justify-center items-center lg:w-auto mt-8 lg:mt-0">
            <Data />
          </div>
        </div>
      </div>
    </div>
  );
};
