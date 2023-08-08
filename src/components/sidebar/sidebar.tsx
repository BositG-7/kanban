import { useState } from "react";
import Board from "./components/board";
import style from "./sidebar.module.scss";
import { BiSolidSun, BiHide } from "react-icons/bi";
import { HiMoon } from "react-icons/hi";
import * as Context from "../../context";
import lightLogo from "./images/light.png";
import darkLogo from "./images/dark.png";
import { motion } from "framer-motion";
import NewBoard from "../new-board/newboard";

const Sidebar = () => {
  const { isSideBar, theme, boards, methods } = Context.Theme.useTheme();
  const [isNewBoardOpen, setisNewBoardOpen] = useState(false);

  const handleTheme = () => {
    methods.handleTheme();
  };
  const animationVariant = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { type: "spring", stiffness: 100 },
  };

  if (isNewBoardOpen)
    return <NewBoard newTaskClose={() => setisNewBoardOpen(false)} />;
  return (
    <div
      className={`${style.sidebar} ${theme ? style.dark : ""} ${
        isSideBar ? style.hideSideBar : ""
      }`}
    >
      <motion.div className={style.top} {...animationVariant}>
        <a href="/" className={style.logo}>
          {theme ? (
            <img src={darkLogo} alt="" />
          ) : (
            <img src={lightLogo} alt="" />
          )}
        </a>
        <div className={style.boardsCount}>ALL BOARDS ({boards.length})</div>
      </motion.div>
      <motion.div className={style.boards}>
        {boards.map(({ name, id }, idx) => (
          <Board key={idx} title={name} id={id} />
          // <Board key={idx} title={title} active={active} />
        ))}
      </motion.div>
      <motion.div className={style.footer} {...animationVariant}>
        <div className={style.panel}>
          <BiSolidSun className={style.icon} />
          <div
            className={`${style.checkbox} ${theme ? style.active : ""}`}
            onClick={handleTheme}
          >
            <div></div>
          </div>
          <HiMoon className={style.icon} />
        </div>
        <div className={style.hideSideBar} onClick={methods.handleSideBar}>
          <BiHide className={style.icon} />
          <span>Hide Sidebar</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
