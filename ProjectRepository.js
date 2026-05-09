import Project from './Project.js';

export default class DataController {
  #projectId = 0;
  #Projects = {};

  /**
   * Creates new Project, pushes it to Projects Array, increments ProjectId for next Project and returns new Project instance.
   * @param {string} title 
   */
  createProject(title) {
    const project = new Project(title);
    this.#Projects[this.#projectId] = project;
    this.#projectId++;
    return project.id;
  }

  /**
   * Get Project by id
   * @param {int} id 
   * @returns Project object
   */
  getProject(id) {
    return this.#Projects[id];
  }
}