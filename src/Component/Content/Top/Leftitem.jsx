import React from "react";
import Style from "./Top.module.css";
const Leftitem = () => {
  return (
    <div className={Style.left_item}>
      <div className={Style.left_Input}>
        <div className={Style.left_Input_content}>
          <div className={Style.search_icon}></div>
          <div className={Style.inputtext}>
            <input type="text" placeholder="Search Tasks" />
          </div>
          <div className={Style.submit_icon}></div>
        </div>
      </div>
      <div className={Style.left_voice}></div>
    </div>
  );
};

export default Leftitem;
