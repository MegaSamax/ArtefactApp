import { makeAutoObservable } from "mobx";
import { persist } from "mobx-persist";
import { v4 as uuidv4 } from "uuid";

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  @persist("object") tasks = [];

  @persist("object") categories = [
    {
      colour: "Blue",
      name: "Blue",
      tasksToUnlock: 0,
      currentTask: 0,
    },
    {
      colour: "Yellow",
      name: "Yellow",
      tasksToUnlock: 5,
      currentTask: 0,
    },
    {
      colour: "Red",
      name: "Red",
      tasksToUnlock: 10,
      currentTask: 0,
    },
    {
      colour: "Green",
      name: "Green",
      tasksToUnlock: 25,
      currentTask: 0,
    },
    {
      colour: "Orange",
      name: "Orange",
      tasksToUnlock: 50,
      currentTask: 0,
    },
    {
      colour: "Purple",
      name: "Purple",
      tasksToUnlock: 75,
      currentTask: 0,
    },
    {
      colour: "White",
      name: "White",
      tasksToUnlock: 100,
      currentTask: 0,
    },
    {
      colour: "Black",
      name: "Black",
      tasksToUnlock: 150,
      currentTask: 0,
    },
  ];

  @persist currentCategory = 0;

  getCategory = () => {
    return this.categories[this.currentCategory];
  };

  // Change Categories Funtions
  prevCategory = () => {
    if (this.currentCategory === 0) {
      return;
    }

    this.currentCategory--;
  };

  nextCategory = () => {
    if (this.currentCategory === 7) {
      return;
    }

    this.currentCategory++;
  };

  @persist completedTasks = 0;

  addTask(text, urgent) {
    const newTask = {
      id: uuidv4(),
      text,
      colour: this.getCategory().colour,
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

    this.deleteTask(this.getCategory().currentTask);
    this.completedTasks++;
  };

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => {
      return task.id !== id;
    });
  }

  getCurrentTask = () => {
    return this.tasks.find(
      (task) => task.id === this.getCategory().currentTask
    );
  };

  // Random Task Selection
  selectRandomTask = () => {
    // Check if there is an existing task
    if (this.getCurrentTask()) {
      return;
    }

    const currentCategoryTasks = this.tasks.filter(
      (task) => task.colour === this.getCategory().colour
    );

    const urgentTasks = currentCategoryTasks.filter((task) => task.urgent);

    if (urgentTasks.length > 0) {
      // select urgent task
      const randomIndex = Math.floor(Math.random() * urgentTasks.length);
      this.getCategory().currentTask = urgentTasks[randomIndex].id;
    } else if (currentCategoryTasks.length > 0) {
      // select non-urgent task
      const randomIndex = Math.floor(
        Math.random() * currentCategoryTasks.length
      );
      this.getCategory().currentTask = currentCategoryTasks[randomIndex].id;
    }
  };
}

export const store = new Store();

//store.tasks[1].text
