import http from "./http";
import { IApi } from "./types";

// export const List = () => http.get<IApi.Board.List.Response>("/api/v1/board");
export const List = ({ taskID }: IApi.Subtask.List.Request) =>
  http.get<IApi.Subtask.List.Response>(`/api/v1/task/${taskID}`);
