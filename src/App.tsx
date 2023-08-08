import { useEffect } from "react";
import { Home, Navbar, Sidebar } from "./components";
import style from "./assets/css/app.module.scss";
import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { Theme as ThemeContext } from "./context";
import { Board } from "./services";
import { IEntity } from "./services/types";
import Registar from "./pages/register/register";
import Confirmation from "./pages/confirm/confirm";

interface AppProps {}
export interface TBoardContext {
  title: string;
  id: number;
}

const App = (props: AppProps) => {
  const [boards, setBoards] = useState<IEntity.Board[]>([]);
  const [columns, setColumns] = useState<IEntity.Coulumn[]>([]);
  const storedTheme = localStorage.getItem("theme");
  const [board, setBoard] = useState<TBoardContext | null>(null);
  const [theme, setTheme] = useState<boolean>(storedTheme === "dark");
  const [isSideBar, setIsSideBar] = useState<boolean>(window.innerWidth < 500);

  const handleSideBar = () => {
    setIsSideBar(!isSideBar);
    localStorage.setItem("isSideBar", (!isSideBar).toString());
  };

  const handleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleBoard = async (title: string, id: number) => {
    const newBoard: TBoardContext = { title, id };
    setBoard(newBoard);
    localStorage.setItem("board", JSON.stringify(newBoard));
    getColumns();
  };

  useEffect(() => {
    const storedBoard = localStorage.getItem("board");
    if (storedBoard !== null) {
      setBoard(JSON.parse(storedBoard) as TBoardContext);
    }

    const storedColumns = localStorage.getItem("columns");
    if (storedColumns !== null) {
      setColumns(JSON.parse(storedColumns));
    }

    document.body.classList.add(`${theme ? "dark" : "light"}`);

    const handleResize = () => {
      setIsSideBar(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  useEffect(() => {
    setIsSideBar(window.innerWidth < 500);

    getBoards();
  }, []);

  const getBoards = async () => {
    try {
      console.log("Uploading boards...");
      const { data } = await Board.List();
      console.log(data.results);
      setBoards(data.results);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getColumns = async () => {
    try {
      const storedBoard = JSON.parse(
        localStorage.getItem("board") || ""
      ) as TBoardContext;
      if (storedBoard !== null) {
        const parsedBoardId = storedBoard.id;
        const { data } = await Board.Single({ boardID: parsedBoardId });
        console.log(`[${data.name}] Single board: `, data.columns);
        setColumns(data.columns);
        localStorage.setItem("columns", JSON.stringify(data.columns));
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        boards,
        columns,
        isSideBar,
        board,
        methods: { handleTheme, handleSideBar, handleBoard },
      }}
    >
      <div className={`${style.app} ${theme ? style.dark : style.light}`}>
        <Sidebar />
        <div className={style.flex}>
          <Navbar />
          <Home />
        </div>
        <div
          className={`${style.corner} ${isSideBar ? "" : style.hide}`}
          onClick={handleSideBar}
        >
          <HiOutlineEye />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
