import { getTodosData, getUsersData } from "../utils/getData.js";
import { pathToResource } from "../utils/getData.js";
import fs from "node:fs/promises";

const todoPath = pathToResource("todos.json");

export const getAllTodosForAUser = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    if (isNaN(userId)) {
      res
        .status(400)
        .json({ success: false, error: "userId must be ba number!" });
    }
    const users = await getUsersData();
    const foundUser = users.find((u) => u.id === userId);
    if (!foundUser)
      return res.status(404).json({ success: false, error: "User not found!" });
    const todos = await getTodosData();
    let data = todos.filter((t) => t.userId === foundUser.id);
    let { title, description, completed } = req.query;
    if (completed !== undefined) {
      const booleansInString = ["true", "false"];
      if (typeof completed === "boolean") {
        completed = completed;
      } else if (
        typeof completed === "string" &&
        booleansInString.includes(completed)
      ) {
        completed = JSON.parse(completed);
      } else {
        return res
          .status(400)
          .json({
            success: false,
            error: "completed must be a boolean, either true or false!",
          });
      }
      data = data.filter((d) => d.completed === completed);
    }
    if (title) {
      data = data.filter((d) =>
        d.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (description) {
      data = data.filter((d) =>
        d.description.toLowerCase().includes(description.toLowerCase())
      );
    }
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewTodoForUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    if (isNaN(userId)) {
      return res
        .status(400)
        .json({ success: false, error: "userId must be a numeric value!" });
    }
    const users = await getUsersData();
    const foundUser = users.find((u) => u.id === userId);
    if (!foundUser)
      return res.status(404).json({ success: false, error: "user nor found!" });
    let { title, description, completed } = req.body;
    if (!title || !description)
      return res
        .status(400)
        .json({
          success: false,
          error: "title and description fields are required!",
        });
    if (completed !== undefined) {
      const booleansInString = ["true", "false"];
      if (typeof completed === "boolean") {
        completed = completed;
      } else if (
        typeof completed === "string" &&
        booleansInString.includes(completed)
      ) {
        completed = completed.toLowerCase();
        completed = JSON.parse(completed);
      } else {
        return res
          .status(400)
          .json({
            success: false,
            error: "completed must be a boolean, either true or false!",
          });
      }
    }
    const todos = await getTodosData();
    const newId =
      todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    const newTodo = {
      id: newId,
      title,
      userId,
      description,
      completed: completed ? completed : false,
    };
    todos.push(newTodo);
    await fs.writeFile(todoPath, JSON.stringify(todos, null, 2), "utf8");
    res
      .status(201)
      .json({
        success: true,
        message: "todo created successfully!",
        data: newTodo,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserTodoById = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const todoId = Number(req.params.todoId);

    if (isNaN(userId) || isNaN(todoId)) {
      return res
        .status(400)
        .json({ success: false, error: "IDs must be numeric values" });
    }

    const users = await getUsersData();
    const foundUser = users.find((u) => u.id === userId);
    if (!foundUser) {
      return res.status(404).json({ success: false, error: "User not found!" });
    }

    const todos = await getTodosData();
    const foundTodo = todos.find((t) => t.userId === userId && t.id === todoId);

    if (!foundTodo) {
      return res.status(404).json({ success: false, error: "Todo not found!" });
    }

    res.status(200).json({ success: true, data: foundTodo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
