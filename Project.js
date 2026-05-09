export default class Project {
  #title;
  #todoList = [];

  contructor(title) {
    this.#title = title;
  }
}