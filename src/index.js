const express = require('express');
const cors = require('cors');

const { v4: uuidV4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find(user => user.username === username);

  if (!user) {
    return response.status(400).json({ error: "User not found." });
  }

  request.user = user;

  return next();
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  const userAlreadyExists = users.some((user) => user.username === username);

  if (userAlreadyExists) {
    return response.status(400).json({ error: "User already exists!" });
  }

  const id = uuidV4();

  users.push({
    id,
    name,
    username,
    todos: []
  })

  return response.status(201).json({ success: "User created successfully." });
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body;
  const { user } = request;

  const id = uuidV4();

  const todo = {
    id,
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  }

  user.todos.push(todo);

  return response.status(201).json({ success: "Todo created successfully." });
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body;
  const { id } = request.params;
  const { user } = request;

  const todoExists = user.todos.find(todo => todo.id === id);

  if (!todoExists) {
    return response.status(400).json({ error: "Todo not found!" });
  }

  todoExists.title = title;
  todoExists.deadline = new Date(deadline);

  return response.status(200).json({ error: "Todo updated successfully." });
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { id } = request.params;
  const { user } = request;

  const todoExists = user.todos.find(todo => todo.id === id);

  if (!todoExists) {
    return response.status(400).json({ error: "Todo not found!" });
  }

  todoExists.done = true;

  return response.status(200).json({ success: "Todo marked as done successfully." });
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { id } = request.params;
  const { user } = request;

  const todoExists = user.todos.find(todo => todo.id === id);

  if (!todoExists) {
    return response.status(400).json({ error: "Todo not found!" });
  }

  user.todos.splice(todoExists, 1);

  return response.status(200).json({ success: "Todo deleted successfully." });
});

module.exports = app;