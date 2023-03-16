import React from "react";
import Style from "./Top.module.css";
const Menuitem = () => {
  return (
    <div className={Style.menu_item}>
      <div className={Style.menu_item_text} style={{ color: "#323C4D" }}>
        Dashboard
      </div>
      <div className={Style.menu_item_text}>My Tasks</div>
      <div className={Style.menu_item_text}>Reporting</div>
      <div className={Style.menu_item_text}>Portfolios</div>
      <div className={Style.menu_item_text}>Goals</div>
    </div>
  );
};

export default Menuitem;
