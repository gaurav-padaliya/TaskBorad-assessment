import React from "react";
import Column from "./Boards/Column";
import Heading from "./Head/Heading";
import Users from "./Head/Users";
import Style from "./MainContent.module.css";

const MainContent = () => {
  return (
    <div className={Style.MainContent}>
      <div className={Style.Head}>
        <Heading />
        <Users />
      </div>
      <div className={Style.Boards}>
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    </div>
  );
};

export default MainContent;
