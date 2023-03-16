import React from "react";
import Leftitem from "./Leftitem";
import Menuitem from "./Menuitem";
import Rightitem from "./Rightitem";
import Style from "./Top.module.css";
const Top = () => {
  return (
    <div className={Style.top}>
      <Leftitem />
      <Menuitem />
      <Rightitem />
    </div>
  );
};

export default Top;
