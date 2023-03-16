import React from "react";
import Style from "./Boards.module.css";

const Column = () => {
  return (
    <div className={Style.column}>
      {/* head */}
      <div className={Style.column_head}>
        <div className={Style.column_head_text}>
          <div className={Style.column_head_text1}>Backlog Tasks</div>
          <div className={Style.column_head_text2}>4</div>
        </div>
        <div className={Style.column_head_icon}></div>
      </div>

      {/* content */}
      <div className={Style.column_content}>
        <div className={Style.column_content_head}>
          <div className={Style.column_content_head_title}>Model Answer</div>
          <div className={Style.column_content_head_cnt}>
            <div className={Style.column_content_head_cnt_icon}></div>
            <div className={Style.column_content_head_cnt_no}>4</div>
          </div>
        </div>
        {/* tag */}
        <div className={Style.column_content_tag}>
          <div
            className={Style.column_content_tag_badges}
            style={{ background: "#FFFFFF", color: "#606C80" }}
          >
            #UI003
          </div>
          <div
            className={Style.column_content_tag_badges}
            style={{ background: "#3B82F61A", color: "#2563EB" }}
          >
            Design
          </div>
          <div
            className={Style.column_content_tag_badges}
            style={{ background: "#EAB3081A", color: "#CA8A04" }}
          >
            #UI003
          </div>
        </div>
        {/* footer */}
        <div className={Style.column_content_footer}>
          <div className={Style.column_content_footer_avatar}></div>
          <div className={Style.column_content_footer_icons}>
            <div className={`${Style.ccfi_gp} ${Style.ccfi_file}`}>
              <div
                className={`${Style.ccfi_icon} ${Style.ccfi_file_icon}`}
              ></div>
              <div className={`${Style.ccfi_no} ${Style.ccfi_file_no}`}>2</div>
            </div>
            <div className={`${Style.ccfi_gp} ${Style.ccfi_msg}`}>
              <div
                className={`${Style.ccfi_icon} ${Style.ccfi_msg_icon}`}
              ></div>
              <div className={`${Style.ccfi_no} ${Style.ccfi_msg_icon}`}>4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column;
