import { Task, Category } from "./types/types";
import { render } from "./helpers/render-tasks.helper.js";
import { renderCategories } from "./helpers/render-categories.helper.js";

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
  { name: "Wyrzucić śmieci", done: false, category: "general" },
  { name: "Pójść na trening", done: true, category: "gym" },
  { name: "Nakarmić psa", done: false, category: "work" },
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
