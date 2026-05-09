import Todo from './Todo.js';

export default class DataController {
  #todoId = 0;
  #Todos = {};

  /**
   * Creates new Todo, pushes it to Todos Array, increments TodoId for next Todo and returns new Todo instance.
   * @param {string} title 
   */
  createTodo(title) {
    const todo = new Todo(title);
    this.#Todos[this.#todoId] = todo;
    this.#todoId++;
    return todo.id;
  }

  /**
   * Get Todo by id
   * @param {int} id 
   * @returns Todo object
   */
  getTodo(id) {
    return this.#Todos[id];
  }
}