import React from "react";
import Style from "./Boards.module.css";
import Content from "./Content";

const Column = ({ data }) => {
  return (
    <div className={Style.column}>
      {/* head */}
      <div className={Style.column_head}>
        <div className={Style.column_head_text}>
          <div className={Style.column_head_text1}>{data.heading}</div>
          <div
            className={Style.column_head_text2}
            style={{ color: data.count_color, background: data.count_bg }}
          >
            {data.count}
          </div>
        </div>
        <div className={Style.column_head_icon}></div>
      </div>

      {/* content */}
      {data.content.map((obj, ind) => (
        <Content key={ind} Head={obj.Head} Tag={obj.Tag} Footer={obj.Footer} />
      ))}
      {/* footer */}
      <div className={Style.column_main_footers}>
        <div className={Style.column_main_footers_icon}></div>
      </div>
    </div>
  );
};

export default Column;
