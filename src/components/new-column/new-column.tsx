import { useState } from "react";
import * as Context from "../../context";
import newColumn from "./new-column.module.scss";

interface NewColumnProps {
  newColumnClose: () => void;
}

const AddNewColumn = (props: NewColumnProps) => {
  const { theme } = Context.Theme.useTheme();
  return (
    <div className={`${newColumn.container} ${theme ? newColumn.dark : ""}`}>
      <div className={newColumn.main}>
        <button className={newColumn.closeBtn} onClick={props.newColumnClose}>
          x
        </button>
        <p className={newColumn.titleMain}>Add New Column</p>
        <label htmlFor="title" className={newColumn.title}>
          Title
          <input
            type="text"
            id="title"
            className={newColumn.input}
            name="title"
          />
        </label>

        <button className={newColumn.createColumn}>Create Column</button>
      </div>
    </div>
  );
};

export default AddNewColumn;
