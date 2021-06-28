import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  tasks = [
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

  currentTask;

  addTask(text, urgent) {
    const newTask = {
      id: uuidv4(),
      text,
      urgent,
    };

    this.tasks.push(newTask);
    // Testing Valid Entry
    console.log(newTask);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => {
      return task.id !== id;
    });
  }
}

export const store = new Store();

//store.tasks[1].text
