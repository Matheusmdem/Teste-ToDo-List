import { Trash } from "phosphor-react";
import { useContext } from "react";
import { TasksContext } from "../../../context/TaskContext";
import { TasksContainer } from "./styles";

export function TasksDone() {

  const {
    tasks = [],
    deleteTask,
  } = useContext(TasksContext)

  return (
    <TasksContainer>
      {tasks.map((task) => (
        <div className="inputTask" key={task.id}>
          <p>{task.text}</p>
          <div className="buttonDiv">
            <button onClick={() => deleteTask(task.id!)}>
              <Trash size={24} />
            </button>
          </div>
        </div>
      ))}
    </TasksContainer>
  )
}