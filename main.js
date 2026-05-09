// Tasks

class Task {
  constructor(title) {
    this.title = title;
  }
}

const TaskStorage = (() => {
  let taskId = 0;
  const tasks = {};

  const all = () => {
    return tasks;
  }

  const find = (id) => {
    return tasks[id];
  }

  const create = (title) => {
    if (!title) {
      console.log("Action Blocked: Task must have title");
      return;
    }

    const task = new Task(title);
    tasks[taskId++] = task;

    return task;
  }

  return {create, find};
})();