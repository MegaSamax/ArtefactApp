import { makeAutoObservable } from "mobx";
import { persist } from "mobx-persist";
import { v4 as uuidv4 } from "uuid";

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  @persist("object") tasks = [
    {
      id: 4125245642345,
      text: "Take out the bins",
      urgent: false,
    },
    {
      id: 70123906205821,
      text: "Clean my room",
      urgent: true,
    },
  ];

  @persist currentTask = 0;

  @persist completedTasks = 0;

  addTask(text, urgent) {
    const newTask = {
      id: uuidv4(),
      text,
      urgent,
    };

    this.tasks = [...this.tasks, newTask];
    // Testing Valid Entry
    console.log(newTask);
  }

  completeTask = () => {
    // Check there is a Task to complete
    if (!this.getCurrentTask()) {
      return;
    }

    this.deleteTask(this.currentTask);
    this.completedTasks++;
  };

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => {
      return task.id !== id;
    });
  }

  getCurrentTask = () => {
    return this.tasks.find((task) => task.id === this.currentTask);
  };

  // Random Task Selection
  selectRandomTask = () => {
    // Check if there is an existing task
    if (this.getCurrentTask()) {
      return;
    }

    const urgentTasks = this.tasks.filter((task) => task.urgent);

    if (urgentTasks.length > 0) {
      // select urgent task
      const randomIndex = Math.floor(Math.random() * urgentTasks.length);
      this.currentTask = urgentTasks[randomIndex].id;
    } else if (this.tasks.length > 0) {
      // select non-urgent task
      const randomIndex = Math.floor(Math.random() * this.tasks.length);
      this.currentTask = this.tasks[randomIndex].id;
    }
  };
}

export const store = new Store();

//store.tasks[1].text
