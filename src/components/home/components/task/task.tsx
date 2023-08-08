import { FunctionComponent, useEffect, useRef, useState } from "react";
import * as Context from "../../../../context";

import style from "./task.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { IEntity } from "../../../../services/types";
import { Subtask } from "../../../../services";
import axios from "axios";

interface TaskProps {
  id: number;
  title: string;
}

const Task: FunctionComponent<TaskProps> = ({ title, id }) => {
  const { theme } = Context.Theme.useTheme();
  const [subtasks, setSubtasks] = useState<IEntity.Subtasks[]>([]);
  const getTasks = async () => {
    try {
      const { data } = await Subtask.List({ taskID: id });
      console.log(data.subtasks);
      setSubtasks(data.subtasks);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const done = subtasks.filter((task) => task.is_completed);
  const willDone = subtasks.filter((task) => !task.is_completed);
  useEffect(() => {
    getTasks();
  }, [id]);

  const handleSubmit = async () => {
    try {
      const form = new FormData();
      form.append("username", "karimov");
      form.append("password", "root123456");
      const { data } = await axios.post(
        "http://159.65.127.13/token/create",
        form
      );

      console.log("TOKEN: ", data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <>
      <motion.div
        transition={{ type: "spring", stiffness: 100 }}
        className={`${style.box} ${theme ? style.dark : ""}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={handleSubmit}
      >
        <h1 className={style.title}>{title}</h1>
        <span className={style.text}>
          {done.length} of {willDone.length}
        </span>
      </motion.div>
    </>
  );
};

export default Task;
