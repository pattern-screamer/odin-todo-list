export default class Todo {
  #id;
  #title;
  #description;
  #dueDate;
  #priority; // 0: None | 1: Low: | 2: Medium | 3: High
  #notes;
  #subtasks = [];
  #checked = false;

  contructor(title) {
    this.#title = title;
  }
}