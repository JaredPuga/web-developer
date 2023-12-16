
export const Search = () => {
  return (
    <>
        <div className="relative hidden xl:block lg:block ">
        <input
            type="text"
            className="py-1 px-4 w-full border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-black"
            />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <img src="/search.svg" alt="search-ico" className="w-4"/>
        </div>
        </div>

        <div className="lg:hidden flex items-center pointer-events-none">
            <img src="/search1.svg" alt="search1-ico" className="w-4"/>
        </div>
    </>
  )
}
