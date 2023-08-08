import http from "./http";
import { IApi } from "./types";

export const List = () => http.get<IApi.Board.List.Response>("/api/v1/board");
export const Single = ({ boardID }: IApi.Board.Single.Request) =>
  http.get<IApi.Board.Single.Response>(`/api/v1/board/${boardID}`);
