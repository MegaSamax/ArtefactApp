import { makeAutoObservable } from "mobx";
import { persist } from "mobx-persist";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { Image } from "react-native";

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  @persist("object") tasks = [];

  @persist("object") categories = [
    {
      colour: "Blue",
      cssColour: "#2196f3",
      name: "Blue",
      tasksToUnlock: 0,
      currentTask: 0,
    },
    {
      colour: "Yellow",
      cssColour: "#f3ef21",
      name: "Yellow",
      tasksToUnlock: 5,
      currentTask: 0,
    },
    {
      colour: "Red",
      cssColour: "#f32521",
      name: "Red",
      tasksToUnlock: 10,
      currentTask: 0,
    },
    {
      colour: "Green",
      cssColour: "#21f360",
      name: "Green",
      tasksToUnlock: 25,
      currentTask: 0,
    },
    {
      colour: "Orange",
      cssColour: "#f37c27",
      name: "Orange",
      tasksToUnlock: 50,
      currentTask: 0,
    },
    {
      colour: "Purple",
      cssColour: "#8321f3",
      name: "Purple",
      tasksToUnlock: 75,
      currentTask: 0,
    },
    {
      colour: "White",
      cssColour: "#d3d3d3",
      name: "White",
      tasksToUnlock: 100,
      currentTask: 0,
    },
    {
      colour: "Black",
      cssColour: "#000000",
      name: "Black",
      tasksToUnlock: 150,
      currentTask: 0,
    },
  ];

  @persist currentCategory = 0;

  getCategory = () => {
    return this.categories[this.currentCategory];
  };

  updateCategoryName = (newName) => {
    return (this.getCategory().name = newName);
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
