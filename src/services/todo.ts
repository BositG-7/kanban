import http from "./http";
import { IApi } from "./types";

// export const List = () => http.get<IApi.Board.List.Response>("/api/v1/board");
export const List = ({ columnID }: IApi.Todo.List.Request) =>
  http.get<IApi.Todo.List.Response>(`/api/v1/todolist/${columnID}`);
