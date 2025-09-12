import React from "react";
import MainForecast from "./MainForecast";
import HourlyForecast from "./HourlyForecast";

function SearchResults() {
    return <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 bg-red-200">
    <MainForecast/> 
      <HourlyForecast/>
  </section>;
}

export default SearchResults;
