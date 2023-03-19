// export type Category = "general" | "gym" | "work" | "hobby";

export enum Category {
  GENERAL = "general",
  GYM = "gym",
  WORK = "work",
  HOBBY = "hobby",
}

export interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

// TUPLE
// const task: [string, Category, boolean] = [
//   'zrobić klatkę',
//   Category.GYM,
//   false
// ]
