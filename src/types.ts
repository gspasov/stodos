export type Todo = {
  id: number;
  description: string;
  done: boolean;
};

export function Todo(id: number, description: string, done: boolean): Todo {
  return { id, description, done };
}
