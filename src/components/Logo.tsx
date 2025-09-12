import React from "react";
import Image from "next/image";

function Logo() {
  return <Image src={'/assets/images/logo.svg' } alt="WeatherNow" width={150} height={100}/>
}

export default Logo;
