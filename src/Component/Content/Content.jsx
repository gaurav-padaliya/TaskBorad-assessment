import React from "react";
import Style from "./Contect.module.css";
import MainContent from "./MainContent/MainContent";
import Top from "./Top/Top";
const Content = () => {
  return (
    <div className={Style.content}>
      <Top />
      <MainContent />
    </div>
  );
};

export default Content;
