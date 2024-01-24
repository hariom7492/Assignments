const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs/promises");
const app = express();
const PORT = 3000;
// const DATA_FILE = "todos.json";
app.use(bodyParser.json());
let todos = [];
async function loadTodos() {
  try {
    const data = await fs.readFile("./todos.json", "utf-8");
    todos = JSON.parse(data);
  } catch (error) {
    todos = [];
  }
}
async function saveTodos() {
  await fs.writeFile("./todos.json", JSON.stringify(todos, null, 1), "utf-8");
}
app.use(async (req, res, next) => {
  await loadTodos();
  next();
});
app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});
app.get("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === todoId);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).send("Not Found");
  }
});
app.post("/todos", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };
  todos.push(newTodo);
  saveTodos();
  res.status(201).json({ id: newTodo.id });
});
app.put("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoId,
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
    };
    saveTodos();
    res.status(200).send("OK");
  } else {
    res.status(404).send("Not Found");
  }
});
app.delete("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    saveTodos();
    res.status(200).send("OK");
  } else {
    res.status(404).send("Not Found");
  }
});
app.use((req, res) => {
  res.status(404).send("Not Found");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;
