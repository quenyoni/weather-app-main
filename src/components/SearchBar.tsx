import React from "react";
import Button from "./Button";
import Image from "next/image";

function SearchBar() {
    return <form className="flex justify-center flex-col md:flex-row gap-4 my-8">
        <SearchInput/>
        <Button type={"submit"} buttonText={"Search"} />
  </form>;
}

export default SearchBar;



function SearchInput() {
    return (
        <div className="rounded bg-[#262540] flex">
            <Image className="ml-8 " alt="search logo" src={'/assets/images/icon-search.svg' }  width={20} height={20} />
            <input className="w-fit h-fit px-[24] py-[16]" type="text" placeholder="Search for a place..." />
        </div>
    )
}