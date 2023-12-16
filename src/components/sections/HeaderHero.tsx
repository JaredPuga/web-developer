import { Card } from "./homepage";

export const HeaderHero = () => {
  return (
    <div className="mx-auto w-5/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-5/6">
      <h1 className="hidden xl:block lg:block text-5xl font-ubuntu text-center py-10 text-brand2">
        Developer
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center">
        <div className="lg:col-span-2 xl:col-span-1 p-4 flex items-center justify-center">
          <Card />
        </div>

        <div className="lg:col-span-1 xl:col-span-1 bg-green-200 p-4"></div>

        <div className="lg:col-span-1 xl:col-span-1 bg-yellow-200 p-4"></div>
      </div>
    </div>
  );
};
