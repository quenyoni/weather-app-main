import React from "react";

function Button({type,buttonText}) {
  return <button className=" px-[24px] py-[16px] rounded" type={type}>{buttonText}</button>;
}

export default Button;
