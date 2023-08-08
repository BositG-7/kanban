import { useState } from "react";
import * as Context from "../../context";
import style from "./newBoard.module.scss";

interface NewTaskProps {
  newTaskClose: () => void;
}

interface ArrayState {
  value: string;
}

const NewBoard = (props: NewTaskProps) => {
  const { theme } = Context.Theme.useTheme();
  const [array, setArray] = useState<ArrayState[]>([{ value: "" }]);

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
    // Create a new input field by adding an empty object to the array
    setArray([...array, { value: "" }]);
  };
  return (
    <section className={`${style.container} ${theme ? style.dark : ""}`}>
      <div className={style.newBoard}>
        <div className={style.title}>
          <h1>Add New Board</h1>
          <button className={style.closeBtn} onClick={props.newTaskClose}>
            x
          </button>
        </div>

        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="e.g. Web Design" id="name" />

          <div className={style.colums}>
            <h3>Columns</h3>
            {/* <div className={style.flex}>
              <input type="text" placeholder="e.g. Web Design" />
              <i className="fa-solid fa-xmark" onClick={() => inputDelete(index)}></i>
            </div>
            <div className={style.flex}>
              <input type="text" placeholder="e.g. Web Design" />
              <i className="fa-solid fa-xmark" onClick={() => inputDelete(index)}></i>
            </div>
           */}

          {array.map(({ value }, index) => (
            <div className={style.flex}>
              <input
                className={style.input}
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
              <button
                className={style.btn}
                onClick={() => inputDelete(index)}
              >
                X
              </button>
            </div>
          ))}</div>
        </form>
        <div className={style.button}>
          <button className={style.addBoard} onClick={addNewInput}>
            + Add New Column
          </button>
          <button className={style.btn}>Create New Board</button>
        </div>
      </div>
    </section>
  );
};

export default NewBoard;
