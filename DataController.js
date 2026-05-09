import Todo from './Todo.js';
import Project from './Project.js';

export default class DataController {
  #projectId = 0;
  #todoId = 0;
  #Projects = [];
  #Todos = [];

  constructor() {
  }

  /**
   * Creates new Project, pushes it to Projects Array, and increments ProjectId for next Project.
   * @param {string} title 
   */
  createProject(title) {
    this.#Projects.push(new Project(this.#projectId++, title));
  }

  /**
   * Creates new Todo, pushes it to Todos Array, and increments TodoId for next Todo.
   * @param {string} title 
   */
  createTodo(title) {
    this.#Todos.push(new Todo(this.#todoId++, title));
  }
}