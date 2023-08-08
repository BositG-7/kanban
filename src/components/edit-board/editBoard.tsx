import style from "./editBoard.module.scss";
import * as Context from "../../context";

function EditBoard() {
  const { theme } = Context.Theme.useTheme();
  return (
    <section
      className={`${style.container} ${theme ? style.dark : style.light}`}
    >
      <div className={style.editBoard}>
        <h1>Edit Board</h1>
        <form action="">
          <label htmlFor="name">Board Name</label>
          <input type="text" placeholder="e.g. Web Design" id="name" />

          <div className={style.colums}>
            <h3>Board Columns</h3>
            <div className={style.flex}>
              <input type="text" placeholder="e.g. Web Design" />
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className={style.flex}>
              <input type="text" placeholder="e.g. Web Design" />
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className={style.flex}>
              <input type="text" placeholder="e.g. Web Design" />
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </form>
        <div className={style.button}>
          <button className={style.btn}>Save Changes</button>
        </div>
      </div>
    </section>
  );
}

export default EditBoard;
