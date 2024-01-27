import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex items-center rounded-full lg:w-[40%] w-full md:px-3 px-2 md:py-1 py-[.2rem] border mr-7 cursor-pointer hover:border-primary_black ">
        <CiSearch size={20} className="icon-color mr-2"/>
        <input placeholder="search.." className=" outline-none bg-transparent w-full md:h-[2.7rem] h-[.7rem] md:text-[1rem] text-[.8rem]"/>
    </div>
  )
}

export default SearchBar