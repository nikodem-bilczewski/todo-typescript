export class TaskClass {
  name: string;
  done: boolean;

  constructor(name: string, done: boolean) {
    console.log("constructor!");
    this.name = name;
    this.done = done;
  }
}
