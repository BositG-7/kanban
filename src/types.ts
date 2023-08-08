import { TBoardContext } from "./App";
import { IEntity } from "./services/types";

export namespace IContext {
  export interface Theme {
    theme: boolean;
    isSideBar: boolean;
    boards: IEntity.Board[];
    columns: IEntity.Coulumn[];
    board: TBoardContext | null;
    methods: {
      handleTheme: () => void;
      handleSideBar: () => void;
      handleBoard: (title: string, id: number) => void;
    };
  }
  export interface TBoard {
    title: string;
    id: number;
    colums: [id: number, board: number, name: string];
  }
}
