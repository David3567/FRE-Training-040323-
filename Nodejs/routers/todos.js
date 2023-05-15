const express = require("express");
const router = express.Router();
// const { todos } = require("../resouses/todolist");
const { Todo } = require('../models/todo');

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

router.post("/", async (req, res) => {
  const {userId, title, completed} = req.body;
  
  const todo = new Todo({
    userId: req.body.userId,
    title,
    completed
  });

  await todo.save();

  res.send(await Todo.find());
});

module.exports = router;


