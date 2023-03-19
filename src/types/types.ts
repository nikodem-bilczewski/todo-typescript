export type Category = "general" | "gym" | "work" | "hobby";

export interface Task {
  name: string;
  done: boolean;
  category?: Category;
}
