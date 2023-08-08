import React, { FunctionComponent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Context from "../../../../context";
import Task from "../task/task";

import style from "./column.module.scss";
import { IEntity } from "../../../../services/types";
import { Todo } from "../../../../services";
import EditTitle from "../../../edit-title-column/edit-title";

interface TTasks {
  subtask: string;
  title: string;
}

interface ColumnProps {
  id: number;
  title: string;
}

const Column: FunctionComponent<ColumnProps> = ({ title, id }) => {
  const { theme } = Context.Theme.useTheme();
  const [tasks, setTasks] = useState<IEntity.Task[]>([]);
  const getTasks = async () => {
    try {
      const { data } = await Todo.List({ columnID: id });
      console.log(data.results);
      setTasks(data.results);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getTasks();
  }, [id]);

  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  if (isNewTaskOpen)
    return <EditTitle editTitleClose={() => setIsNewTaskOpen(false)} />;
  return (
    <>
      <div className={`${style.column} ${theme ? style.dark : ""}`}>
        <div className={style.top}>
          <div className={style.dd}>
            <div className={style.radius}></div>
            {title}({tasks.length}){" "}
          </div>
          <span
            onClick={() => {
              setIsNewTaskOpen(true);
            }}
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </div>
        <motion.div className={style.main}>
          {tasks.map(({ id, title }) => (
            <Task key={id} title={title} id={id} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Column;
