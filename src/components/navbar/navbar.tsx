import { useState } from "react";
import * as Context from "../../context";
import AddNewTask from "../new-task/new-task"; // `NewTask` nomini `AddNewTask` deb o'zgartiring
import Profile from "../../profile/profile";
import style from "./navbar.module.scss";
import { motion } from "framer-motion";
import NewBoard from "../new-board/newboard";
interface HeaderProps {}

const Navbar = (props: HeaderProps) => {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false); // `newTask` nomini `isNewTaskOpen` deb o'zgartiring

  const { theme, isSideBar, board } = Context.Theme.useTheme();
  const animationVariant = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 100 },
  };
  if (isNewTaskOpen)
    return <AddNewTask newTaskClose={() => setIsNewTaskOpen(false)} />; // `NewTask` nomini `AddNewTask` deb o'zgartiring
  // return <NewBoard newTaskClose={() => setIsNewTaskOpen(false)} />; // `NewTask` nomini `AddNewTask` deb o'zgartiring

  return (
    <div
      className={`${style.navbar} ${isSideBar ? style.hideSideBar : ""} ${
        theme ? style.dark : ""
      }`}
    >
      <div className={style.title}>
        {board ? board?.title : "No Selected Board"}
      </div>
      <nav className={style.nav}>
        <motion.button
          className={style.miniButton}
          onClick={() => setIsNewTaskOpen(true)}
          {...animationVariant}
        ></motion.button>
        <motion.button
          className={style.button}
          onClick={() => setIsNewTaskOpen(true)}
          {...animationVariant}
        >
          {" "}
          <i className="fa-solid fa-plus"></i> <>Add New Task</>
        </motion.button>
        <motion.button
          className={style.miniButton}
          onClick={() => setIsNewTaskOpen(true)}
          {...animationVariant}
        >
          <i className="fa-solid fa-plus"></i>
        </motion.button>

        <Profile />
      </nav>
    </div>
  );
};

export default Navbar;
