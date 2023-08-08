import { PiTable } from "react-icons/pi";
import style from "./board.module.scss";
import { motion } from "framer-motion";
import * as Context from "../../../context";
interface BoardProps {
  // active: boolean;
  title: string;
  id: number;
}
const animationVariant = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { type: "spring", stiffness: 100 },
};

const Board = ({ title, id }: BoardProps) => {
  const { board, methods } = Context.Theme.useTheme();
  console.log("BOARD boardId: ", board?.id);
  const handleBoard = () => {
    methods.handleBoard(title, id);
    methods.handleSideBar();
  };
  return (
    <>
      <motion.div
        className={`${style.board} ${board?.id === id ? style.active : ""}`}
        {...animationVariant}
        onClick={() => methods.handleBoard(title, id)}
      >
        <PiTable className={style.icon} />
        <span>{title}</span>
      </motion.div>
      <motion.div
        className={`${style.hideBoard} ${board?.id === id ? style.active : ""}`}
        {...animationVariant}
        onClick={handleBoard}
      >
        <PiTable className={style.icon} />
        <span>{title}</span>
      </motion.div>
    </>
  );
};

export default Board;
