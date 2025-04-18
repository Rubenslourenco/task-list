import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description:
        "Estudar programação para se tornar um desenvolvedor front-end",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Estudar Ingles",
      description: "Estudar ingles para ser um desenvolvedor front-end",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Mateamatica",
      description: "Estudar mateamatica para ser um desenvolvedor front-end",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newtasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newtasks);
  }

  function OnAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center  p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask OnAddTaskSubmit={OnAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
};

export default App;
