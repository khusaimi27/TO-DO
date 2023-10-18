import { useState } from "react";

const initialTask = [
  { id: 1, description: "Post Item ", done: false },
  { id: 2, description: "Make Asignment ", done: true },
  { id: 3, description: "Group Discussion", done: false },
];

export default function App() {
  const [addedTask, setAddedTask] = useState([]);

  function handleAddTask(task) {
    setAddedTask((addedTask) => [...addedTask, task]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddTask={handleAddTask} />
      <TaskList addedTasks={addedTask} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1 className="logo">📖 TO-DO LIST 👩‍💻</h1>;
}

function Form({ onAddTask }) {
  const [taskDescription, setTaskDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!taskDescription) return;

    const newTask = { taskDescription, done: false, id: Date.now() };
    console.log(newTask);

    onAddTask(newTask);

    setTaskDescription("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="h3-form">
        Write down your task in the form and press the add button
      </h3>
      <input
        className="btn-task"
        type="text"
        placeholder="task.."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button className="btn-add">Add</button>
    </form>
  );
}

function TaskList({ addedTasks }) {
  return (
    <div className="task-list">
      <ul>
        {addedTasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}

function Task({ task }) {
  return (
    <li>
      <span style={task.done ? { textDecoration: "line-through" } : {}}>
        {task.done}
        {task.taskDescription}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X item ...</em>
    </footer>
  );
}
