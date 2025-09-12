import React from "react";
import Logo from './Logo'
import Dropdown from "./Dropdown";

function Header() {
    return <header className="w-screen mx-auto  flex justify-between items-center py-8 px-16">
        <Logo />
        <Dropdown/>
      
        
  </header>;
}

export default Header;
