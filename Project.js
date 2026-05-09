export default class Project {
  #id;
  #title;
  #todoList = [];

  contructor(id, title) {
    this.#id = id;
    this.#title = title;
  }
}