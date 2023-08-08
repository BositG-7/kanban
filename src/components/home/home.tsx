import React, { useEffect, useState } from "react";
import Column from "./components/column/column";
import * as Context from "../../context";

import style from "./home.module.scss";
import { Board } from "../../services";
import { IEntity } from "../../services/types";
import AddNewColumn from "../new-column/new-column";

interface HomeProps {}

interface TColumn {
  title: string;
  tasks: Array<{ title: string; subtask: string }>;
}

const Home = (props: HomeProps) => {
  const { theme, isSideBar, columns, board } = Context.Theme.useTheme();

  if (board === null) {
    return (
      <div
        className={`${style.noSelected} ${theme ? style.dark : ""} ${
          isSideBar ? style.hideSideBar : ""
        }`}
      >
        Board not selected
      </div>
    );
  }
  if (board?.id && columns.length === 0) {
    return (
      <>
        <div
          className={`${style.columnsNot} ${
            isSideBar ? style.hideSideBar : ""
          } ${theme ? style.dark : ""}`}
        >
          <p className={style.text}>
            This board is empty. Create a new column to get started.
          </p>
          <button className={style.btn}>+ Add New Column</button>
        </div>
      </>
    );
  }
  // if (columns.length === 0) {
  //   return (
  //     <div
  //       className={`${style.columnsNot} ${isSideBar ? style.hideSideBar : ""} ${
  //         theme ? style.dark : ""
  //       }`}
  //     >
  //       <p className={style.text}>
  //         This board is empty. Create a new column to get started.
  //       </p>
  //       <button className={style.btn}>+ Add New Column</button>
  //     </div>
  //   );
  // }

  return (
    <div
      className={`${style.home} ${isSideBar ? style.hideSideBar : ""} ${
        theme ? style.dark : ""
      }`}
    >
      {columns.map(({ name, id }) => (
        <Column key={id} title={name} id={id} />
      ))}
      <div className={style.new}>+ New Column</div>
    </div>
  );
};

export default Home;
