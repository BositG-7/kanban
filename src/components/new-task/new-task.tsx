import { useState } from "react";
import * as Context from "../../context";
import style from "./new-task.module.scss";

interface NewTaskProps {
  newTaskClose: () => void;
}
interface ArrayState {
  value: string;
}
interface TUsers {
  value: string;
  id: string;
}

const AddNewTask = (props: NewTaskProps) => {
  const { theme } = Context.Theme.useTheme();
  const [array, setArray] = useState<ArrayState[]>([{ value: "" }]);
  const [users, setUsers] = useState<TUsers[]>([
    { id: "1", value: "user1" },
    { id: "2", value: "Madina" },
    { id: "3", value: "Shahzod" },
    { id: "4", value: "Murodulla" },
    { id: "5", value: "Payzilla" },
    { id: "6", value: "Bosit" },
    { id: "7", value: "Nurullo" },
  ]);
  const handleInputChange = (index: number, newValue: string) => {
    const newArray = [...array];
    newArray[index].value = newValue;
    setArray(newArray);
  };

  const inputDelete = (index: number) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const addNewInput = () => {
    setArray([...array, { value: "" }]);
  };

  const handleUserSearch = (e: any) => {
    const value = e.target.value;
  };

  return (
    <div className={`${style.container} ${theme ? style.dark : ""}`}>
      <div className={style.main}>
        <button className={style.closeBtn} onClick={props.newTaskClose}>
          x
        </button>
        <p className={style.titleMain}>Add New Task</p>
        <label htmlFor="title" className={style.title}>
          Title
          <input type="text" id="title" className={style.input} name="title" />
        </label>
        <label htmlFor="Description" className={style.title}>
          Description
          <textarea
            id="Description"
            className={style.input}
            name="Description"
            rows={8}
          />
        </label>
        <div className={style.subtasks}>
          <p className={style.title}>Subtasks</p>
          {array.map(({ value }, index) => (
            <div className={style.subtasksItem}>
              <input
                aria-label="text"
                className={style.input}
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
              <button className={style.btn} onClick={() => inputDelete(index)}>
                X
              </button>
            </div>
          ))}
          <button className={style.createBtn} onClick={addNewInput}>
            + Add New Subtask
          </button>
        </div>
        <div className={style.users}>
          <span></span>
          <input
            type="text"
            className={style.input}
            onChange={handleUserSearch}
          />
        </div>
        <div className={style.status}>
          <label className={style.title} htmlFor="status">
            Status
          </label>
          <select className={style.input} name="languages" id="status">
            <option value="Todo">Todo</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
            <option value="golang">Golang</option>
            <option value="python">Python</option>
            <option value="c#">C#</option>
            <option value="C++">C++</option>
            <option value="erlang">Erlang</option>
          </select>
        </div>
        <button className={style.createTask}>Create Task</button>
      </div>
    </div>
  );
};

export default AddNewTask;
