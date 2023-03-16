import React from "react";
import Style from "./Dashboard.module.css";
const Items = ({ text, number, image }) => {
  return (
    <div className={Style.Item_container}>
      <div className={Style.Item_left}>
        <div className={`${Style.Item_left_icon} ${Style?.[image]}`}></div>
        <div className={Style.Item_left_title}>{text}</div>
      </div>
      {number ? (
        <div className={Style.Item_right}>
          <div className={Style.Item_right_el}>{number}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Items;
