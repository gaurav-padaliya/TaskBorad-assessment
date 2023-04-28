import React from "react";
import Column from "./Boards/Column";
import Heading from "./Head/Heading";
import Users from "./Head/Users";
import Style from "./MainContent.module.css";

const MainContent = () => {
  const arr1 = [
    {
      heading: "Backlog Tasks",
      count: 4,
      count_color: "#CA8A04",
      count_bg: "rgba(234, 179, 8, 0.1)",
      content: [
        {
          Head: {
            title: "Model And Answer",
            cnt: 4,
            c_cnt: "rgba(23, 165, 230, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "#606C80",
              text: "#UI007",
            },
            {
              is: true,
              background: "rgba(236, 72, 153, 0.1)",
              color: "rgba(219, 39, 119, 1)",
              text: "Develop",
            },
            {
              is: true,
              background: "#EAB3081A",
              color: "#CA8A04",
              text: "#UI003",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 4,
            text2: 2,
          },
        },
        {
          Head: {
            title: "Create calendar, chat and email app pages ",
            cnt: 1,
            c_cnt: "rgba(23, 165, 230, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "rgba(96, 108, 128, 1)",
              text: "#UI003",
            },
            {
              is: true,
              background: "#3B82F61A",
              color: "#2563EB",
              text: "Design",
            },
            {
              is: true,
              background: "#EAB3081A",
              color: "#CA8A04",
              text: "Backlog",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: true,
            text_col: "#9333EA",
            text1: 4,
            text2: 2,
          },
        },
        {
          Head: {
            title: "Product Design, Figma, Sketch (Software), Prototype",
            cnt: 2,
            c_cnt: "rgba(218, 222, 229, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "rgba(96, 108, 128, 1)",
              text: "#BC05",
            },
            {
              is: true,
              background: "#FFFFFF",
              color: "rgba(96, 108, 128, 1)",
              text: "Project",
            },
            {
              is: true,
              background: "#EAB3081A",
              color: "#CA8A04",
              text: "Backlog",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 1,
            plus: "+5",
            isPlus5: false,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 2,
            text2: 4,
          },
        },
        {
          Head: {
            title: "Change email option process",
            cnt: 2,
            c_cnt: "rgba(218, 222, 229, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "rgba(96, 108, 128, 1)",
              text: "#BC05",
            },
            {
              is: true,
              background: "#FFFFFF",
              color: "rgba(96, 108, 128, 1)",
              text: "Project",
            },
            {
              is: true,
              background: "#EAB3081A",
              color: "#CA8A04",
              text: "Backlog",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 2,
            text2: 4,
          },
        },
        {
          Head: {
            title: "Change email option process",
            cnt: 2,
            c_cnt: "rgba(218, 222, 229, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "rgba(96, 108, 128, 1)",
              text: "#BC05",
            },
            {
              is: true,
              background: "#EAB3081A",
              color: "#CA8A04",
              text: "Backlog",
            },
          ],
          Footer: {
            is: false,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 2,
            text2: 4,
          },
        },
      ],
    },
    {
      heading: "To Do Tasks",
      count: 2,
      count_color: "rgba(219, 39, 119, 1)",
      count_bg: "rgba(236, 72, 153, 0.1)",
      content: [
        {
          Head: {
            title: "Model And Answer",
            cnt: 4,
            c_cnt: "rgba(152, 162, 178, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "#606C80",
              text: "#UI005",
            },
            {
              is: true,
              background: "rgba(236, 72, 153, 0.1)",
              color: "rgba(219, 39, 119, 1)",
              text: "To Do",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 4,
            text2: 2,
          },
        },
        {
          Head: {
            title: "Add authentication pages",
            cnt: 1,
            c_cnt: "rgba(152, 162, 178, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "#606C80",
              text: "#UI008",
            },
            {
              is: true,
              background: "rgba(236, 72, 153, 0.1)",
              color: "rgba(219, 39, 119, 1)",
              text: "To Do",
            },
          ],
          Footer: {
            is: false,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 4,
            text2: 2,
          },
        },
        {
          Head: {
            title: "Profile Page Satructure",
            cnt: 4,
            c_cnt: "rgba(152, 162, 178, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "#606C80",
              text: "#UI005",
            },
            {
              is: true,
              background: "rgba(236, 72, 153, 0.1)",
              color: "rgba(219, 39, 119, 1)",
              text: "To Do",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 1,
            plus: "+5",
            isPlus5: false,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 4,
            text2: 2,
          },
        },
        {
          Head: {
            title: "Create calendar, chat and email app pages ",
            cnt: 1,
            c_cnt: "rgba(23, 165, 230, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "rgba(96, 108, 128, 1)",
              text: "#UI003",
            },
            {
              is: true,
              background: "rgba(236, 72, 153, 0.1)",
              color: "rgba(219, 39, 119, 1)",
              text: "Design",
            },
            {
              is: true,
              background: "#EAB3081A",
              color: "#CA8A04",
              text: "Backlog",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: true,
            text_col: "#9333EA",
            text1: 4,
            text2: 2,
          },
        },
      ],
    },
    {
      heading: "In Process",
      count: 2,
      count_color: "rgba(147, 51, 234, 1)",
      count_bg: "rgba(168, 85, 247, 0.1)",
      content: [
        {
          Head: {
            title: "Model And Answer",
            cnt: 4,
            c_cnt: "rgba(23, 165, 230, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "#606C80",
              text: "#UI007",
            },
            {
              is: true,
              background: "rgba(168, 85, 247, 0.1)",
              color: "rgba(147, 51, 234, 1)",
              text: "In Process",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 2,
            text2: 4,
          },
        },
        {
          Head: {
            title: "Model And Answer",
            cnt: 4,
            c_cnt: "rgba(23, 165, 230, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "#606C80",
              text: "#UI007",
            },
            {
              is: true,
              background: "rgba(168, 85, 247, 0.1)",
              color: "rgba(147, 51, 234, 1)",
              text: "In Process",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 2,
            text2: 4,
          },
        },
      ],
    },
    {
      heading: "Done",
      count: 5,
      count_color: "rgba(22, 163, 74, 1)",
      count_bg: "rgba(34, 197, 94, 0.1)",
      content: [
        {
          Head: {
            title: "Model And Answer",
            cnt: 4,
            c_cnt: "rgba(23, 165, 230, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "#606C80",
              text: "#002 ",
            },
            {
              is: true,
              color: "rgba(22, 163, 74, 1)",
              background: "rgba(34, 197, 94, 0.1)",
              text: "Done",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 4,
            text2: 2,
          },
        },
        {
          Head: {
            title: "Create calendar, chat and email app pages",
            cnt: 4,
            c_cnt: "rgba(23, 165, 230, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "#606C80",
              text: "#002 ",
            },
            {
              is: true,
              color: "rgba(22, 163, 74, 1)",
              background: "rgba(34, 197, 94, 0.1)",
              text: "Done",
            },
          ],
          Footer: {
            is: false,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 4,
            text2: 2,
          },
        },
        {
          Head: {
            title: "Product Design, Figma, Sketch (Software), Prototype",
            cnt: 4,
            c_cnt: "rgba(23, 165, 230, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "#606C80",
              text: "#002 ",
            },
            {
              is: true,
              color: "rgba(22, 163, 74, 1)",
              background: "rgba(34, 197, 94, 0.1)",
              text: "Done",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 1,
            plus: "+5",
            isPlus5: false,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 4,
            text2: 2,
          },
        },
        {
          Head: {
            title: "Model And Answer",
            cnt: 4,
            c_cnt: "rgba(23, 165, 230, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "#606C80",
              text: "#002 ",
            },
            {
              is: true,
              color: "rgba(22, 163, 74, 1)",
              background: "rgba(34, 197, 94, 0.1)",
              text: "Done",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: false,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 4,
            text2: 2,
          },
        },
        {
          Head: {
            title: "Create calendar, chat and email app pages",
            cnt: 4,
            c_cnt: "rgba(23, 165, 230, 1)",
          },
          Tag: [
            {
              is: true,
              background: "#FFFFFF",
              color: "#606C80",
              text: "#002 ",
            },
            {
              is: true,
              color: "rgba(22, 163, 74, 1)",
              background: "rgba(34, 197, 94, 0.1)",
              text: "Done",
            },
          ],
          Footer: {
            is: true,
            im_cnt: 2,
            plus: "+5",
            isPlus5: true,
            isUpload: true,
            text_col: "rgba(152, 162, 178, 1)",
            text1: 4,
            text2: 2,
          },
        },
      ],
    },
  ];
  return (
    <div className={Style.MainContent}>
      <div className={Style.Head}>
        <Heading />
        <Users />
      </div>
      <div className={Style.Boards}>
        {arr1.map((obj, ind) => (
          <Column key={ind} data={obj} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
