import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';

const LOCAL_STORAGE_KEY = 'todo:savedtasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadSavedTasks();
  }, []);

  // funzione per caricare i dati dal local storage
  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (saved) {
      setTasks(JSON.parse(saved));
    }
  };

  // Save tasks with Local Storage
  const setTasksAndSave = (newTask) => {
    setTasks(newTask);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask));
  };

  const addTask = (taskTitle) => {
    setTasksAndSave([
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
      ...tasks,
    ]);
    // console.log(tasks);
  };

  // toggle task completed
  const toggleTaskCompletedById = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  };

  // Delete tasks
  const deleteTaskById = (taskId) => {
    const newTask = tasks.filter((task) => task.id !== taskId);

    setTasksAndSave(newTask);
  };

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onComplete={toggleTaskCompletedById} onDelete={deleteTaskById} />
    </>
  );
}

export default App;
