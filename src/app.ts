import { Task, Category } from "./types/types.js";
import { render } from "./helpers/render-tasks.helper.js";
import { renderCategories } from "./helpers/render-categories.helper.js";
import { TaskClass } from "./classes/task.js";

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
  Category.GENERAL,
  Category.WORK,
  Category.GYM,
  Category.HOBBY,
];

const tasks: Task[] = [
  { name: "Wyrzucić śmieci", done: false, category: Category.GENERAL },
  { name: "Pójść na trening", done: true, category: Category.GYM },
  { name: "Nakarmić psa", done: false, category: Category.WORK },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (e) => {
  e.preventDefault();

  if (taskNameInputElement.value === "") return;
  addTask({
    name: taskNameInputElement.value,
    done: false,
    category: selectedCategory,
  });
  render(tasks, tasksContainerElement);
  taskNameInputElement.value = "";
});
renderCategories(
  categories,
  categoriesContainerElement,
  updateSelectedCategory
);

render(tasks, tasksContainerElement);

const taskClassInstance = new TaskClass("majca", false);

console.log(taskClassInstance);
