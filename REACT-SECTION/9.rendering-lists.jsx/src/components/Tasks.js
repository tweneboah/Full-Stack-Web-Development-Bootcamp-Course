import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Finish React tutorial", completed: true },
    { id: 2, name: "Go grocery shopping", completed: false },
    { id: 3, name: "Prepre dinner", completed: false },
    { id: 4, name: "Read a book", completed: false },
  ]);
  console.log(tasks);
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.name} - {task.completed ? "Completed" : "Pending"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
