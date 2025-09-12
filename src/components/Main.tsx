import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import {Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({weight:["700"]})

function Main() {
    return <main className="w-screen mx-auto py-8 px-16">
        <h1 className={`text-5xl text-center  tracking-wider leading-16 font-[700]  ${bricolage.className}`}>How's the sky  looking today?</h1>
        <SearchBar />
        <SearchResults/>
  </main>;
}

export default Main;
