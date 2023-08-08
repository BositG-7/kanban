export namespace IEntity {
  export interface Main {
    count: 3;
    next: number | null;
    previous: number | null;
    results: Board[];
  }
  export interface Board {
    id: number;
    name: string;
    columns: Coulumn[];
  }
  export interface Coulumn {
    id: number;
    name: string;
    board: number;
  }
  export interface Todo {
    count: 3;
    next: number | null;
    previous: number | null;
    results: Task[];
  }
  export interface Task {
    id: number;
    title: string;
    description: string;
    status: number;
    difficulty: string;
    subtasks: Subtasks[];
  }
  export interface Subtasks {
    id: number;
    name: string;
    is_completed: false;
  }
}

export namespace IApi {
  export namespace Board {
    export namespace List {
      export interface Request {}
      export type Response = IEntity.Main;
    }

    export namespace Single {
      export interface Request {
        boardID: number | null;
      }
      export type Response = IEntity.Board;
    }
  }
  export namespace Todo {
    export namespace List {
      export interface Request {
        columnID: number | null;
      }
      export type Response = IEntity.Todo;
    }
  }
  export namespace Subtask {
    export namespace List {
      export interface Request {
        taskID: number | null;
      }
      export type Response = IEntity.Task;
    }
  }
}
