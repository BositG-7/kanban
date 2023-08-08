import * as Context from "../../context";

import { useState } from "react";
import style from "./edit-title.module.scss";

interface EditTitleProps {
  editTitleClose: () => void;
}

const EditTitle = ({ editTitleClose }: EditTitleProps) => {
  const { theme } = Context.Theme.useTheme();

  return (
    <div
      className={`{style.container} ${
        theme ? style.dark : style.light
      }`}
    >
      <div className={style.main}>
        <button className={style.closeBtn} onClick={editTitleClose}>
          x
        </button>
        <p className={style.titleMain}>Edit title</p>
        <label htmlFor="title" className={style.title}>
          Title
          <input
            type="text"
            id="title"
            className={style.input}
            name="title"
          />
        </label>

        <button className={style.createColumn}>Edit</button>
      </div>
    </div>
  );
};

export default EditTitle;
