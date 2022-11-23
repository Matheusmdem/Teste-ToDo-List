import { createContext, ReactNode, useEffect, useState } from "react";

interface Task {
  id?: string;
  text: string;
  done?: boolean;
}

interface CyclesContextProviderProps {
  children: ReactNode;
}

interface CreateTaskData {
  text: string;
  upload?: string;
}

interface TaskContextType {
  tasks: Task[];
  createNewTask: (data: CreateTaskData) => void;
  deleteTask: (id: string) => void;
}

export const TasksContext = createContext({} as TaskContextType)

export function TasksProvider({ children }: CyclesContextProviderProps) {
  const [tasks, setTasks] = useState(() => {
    const storedStateAsJSON = localStorage.getItem('@todolist');

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(tasks)

    localStorage.setItem('@todolist', stateJSON)
  }, [tasks])

  function createNewTask(data: CreateTaskData) {
    const id = String(new Date().getTime())
    const copyTasks = [...tasks]

    const newTask: Task = {
      id,
      text: data.text,
      done: false
    }

    copyTasks.push(newTask)
    setTasks(copyTasks)
  }

  function deleteTask(id: string) {
    const copyTasks = [...tasks]

    const tasksFiltered = copyTasks.filter((task) => {
      return task.id !== id
    })

    setTasks(tasksFiltered)
  }


  return (
    <TasksContext.Provider
      value={{
        tasks,
        createNewTask,
        deleteTask
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}