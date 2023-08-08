import { useState } from "react";
import * as Context from "../../context";
import style from "./subtask.module.scss";

const SubTask = () => {
  const { theme } = Context.Theme.useTheme();
  const [title, setTitle] = useState<string>(
    "Research pricing points of various competitors and trial different business models"
  );
  const [description, setDescription] = useState<string>(
    "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition."
  );
  const [tasks, setTasks] = useState([
    { value: "Research competitor pricing and business models" },
    { value: "Outline a business model that works for our solution" },
    {
      value:
        "Talk to potential customers about our proposed solution and ask for fair price expectancy",
    },
    { value: "Research competitor pricing and business models" },
    { value: "Outline a business model that works for our solution" },
    {
      value:
        "Talk to potential customers about our proposed solution and ask for fair price expectancy",
    },
  ]);
  return (
    <div className={`${style.container} ${theme ? style.dark : ""}`}>
      <div className={style.subtask}>
        <div className={style.top}>
          <h2>{title}</h2>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <p>{description}</p>
        <span>Subtasks (0 of {tasks.length})</span>
        <ul>
          {tasks.map(({ value }, idx) => (
            <li key={idx}>
              <label htmlFor="c">
                <input type="checkbox" id="c" aria-label="checkbox" />
                {value}
              </label>
            </li>
          ))}
        </ul>
        <span>Current Status</span>
        <select title="current-status">
          <option value="">Doing</option>
        </select>
      </div>
    </div>
  );
};

export default SubTask;
