import { getTodosData, getUsersData } from "../utils/getData.js";
import { pathToResource } from "../utils/getData.js";
import fs from "node:fs/promises";

const path = pathToResource("todos.json");

export const getAllTodos = async (req, res) => {
  try {
    const todos = await getTodosData();
    let { userId, description, title, completed } = req.query;
    if (userId && isNaN(Number(userId))) {
      return res
        .status(400)
        .json({ success: false, error: "userId must be a number" });
    }
    let filteredData = todos;
    if (userId && userId) {
      filteredData = filteredData.filter(
        (data) => data.userId === Number(userId)
      );
    }
    if (description) {
      filteredData = filteredData.filter((data) =>
        data.description.toLowerCase().includes(description.toLowerCase())
      );
    }
    if (title) {
      filteredData = filteredData.filter((data) =>
        data.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (completed) {
      if (!["true", "false"].includes(completed)) {
        return res
          .status(400)
          .json({ success: false, error: "completed must be true or false" });
      }
    }
    if (completed) {
      completed = completed.trim();
      filteredData = filteredData.filter(
        (data) => data.completed === JSON.parse(completed)
      );
    }
    res.status(200).json({ success: true, data: filteredData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res
        .status(400)
        .json({ success: false, error: "id must be a numeric value" });
    }
    const todos = await getTodosData();
    const foundTodo = todos.find((t) => t.id === id);
    if (!foundTodo)
      return res.status(404).json({ success: false, error: "Todo not found!" });
    res.status(200).json({ success: true, data: foundTodo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewTodo = async (req, res) => {
  try {
    let { userId, title, description, completed } = req.body;
    if (!userId || !title || !description) {
      return res
        .status(400)
        .json({
          success: false,
          error: "userId, title and description fields are required",
        });
    }
    userId = Number(userId);
    if (isNaN(userId)) {
      return res
        .status(400)
        .json({ success: false, error: "userId must be a numeric value" });
    }
    const users = await getUsersData();
    const foundUser = users.find((u) => u.id === userId);
    if (!foundUser) {
      return res.status(404).json({ success: false, error: "User not found!" });
    }
    if (completed) {
      if (completed !== undefined && typeof completed !== "boolean") {
        return res
          .status(400)
          .json({ success: false, error: "completed must be a boolean!" });
      }
    }
    const todos = await getTodosData();
    const newId =
      todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

    const newTodo = {
      id: newId,
      userId,
      title: title.trim(),
      description: description.trim(),
      completed: completed ? completed : false,
    };
    todos.push(newTodo);
    await fs.writeFile(path, JSON.stringify(todos, null, 2), "utf8");
    res
      .status(201)
      .json({
        success: true,
        message: "Todo created successfully!",
        data: newTodo,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateTodo = async(req, res) => {
  try {
    const id = Number(req.params.id)
    if (isNaN(id)) {
      return  res.status(400).json({success: false, error: 'id must be a number!'})
    }
    const todos = await getTodosData()
    const foundTodo = todos.find((t) => t.id === id)
    if (!foundTodo) return res.status(404).json({ success: false, error: 'Todo not found!' })
    let { userId, title, description, completed } = req.body
    if (Object.keys(req.body).length === 0) {
     return res.status(400).json({success: false, error: 'Nothing to update!'})
    }
    if (!userId || !title || !description || completed === undefined) {
      return res.status(400).json({success: false, error: 'All fields are required!'})
    }
    const users = await getUsersData()
    const foundUser = users.find((u) => u.id === Number(userId))
   if(!foundUser) return res.status(404).json({success: false, error: 'No user found with that userId'})
    userId = Number(userId)
    const booleansInString = ['true', 'false']
    if (typeof completed === 'boolean') {
      completed = completed
    }else if (typeof completed === 'string' && booleansInString.includes(completed)) {
      completed = JSON.parse(completed)
    } else {
      return res.status(400).json({success: false, error: 'completed must be a boolean, either true or false!'})
    }    
    const updatedTodo = {
      id: foundTodo.id,
      userId,
      title,
      description,
      completed
    }
    const i = todos.findIndex((t) => t.id === id)
    todos[i] = updatedTodo
    await fs.writeFile(path, JSON.stringify(todos, null, 2), 'utf8')
    res.status(200).json({success: true, message: 'Todo updated successfully!', data: updatedTodo})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const partialUpdateTodo = async (req, res) => {
  try {
    const id = Number(req.params.id)
    if (isNaN(id)) {
      return  res.status(400).json({success: false, error: 'id must be a number!'})
    }
    const todos = await getTodosData()
    const foundTodo = todos.find((t) => t.id === id)
    if (!foundTodo) return res.status(404).json({ success: false, error: 'Todo not found!' })
    let { userId, title, description, completed } = req.body
    if (Object.keys(req.body).length === 0) {
     return res.status(400).json({success: false, error: 'Nothing to update!'})
    }
    const users = await getUsersData()
    if (userId) {
      userId = Number(userId)
      const foundUser = users.find((u) => u.id === Number(userId))
   if(!foundUser) return res.status(404).json({success: false, error: 'No user found with that userId'})
   }
    
    if (completed !== undefined) {
        const booleansInString = ['true', 'false']
    if (typeof completed === 'boolean') {
      completed = completed
    }else if (typeof completed === 'string' && booleansInString.includes(completed)) {
      completed = JSON.parse(completed)
    } else {
      return res.status(400).json({success: false, error: 'completed must be a boolean, either true or false!'})
    }  
   }  
    const updatedTodo = {
      id: foundTodo.id,
      userId: userId ? userId : foundTodo.userId,
      title: title ? title : foundTodo.title,
      description: description ? description : foundTodo.description,
      completed: completed !== undefined ? completed : foundTodo.completed
    }
    const i = todos.findIndex((t) => t.id === id)
    todos[i] = updatedTodo
    await fs.writeFile(path, JSON.stringify(todos, null, 2), 'utf8')
    res.status(200).json({success: true, message: 'Todo updated successfully!', data: updatedTodo})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const deleteTodo = async (req, res) => {
  try {
    const id = Number(req.params.id)
    if (isNaN(id)) {
      return  res.status(400).json({success: false, error: 'id must be a number!'})
    }
    const todos = await getTodosData()
    const foundTodo = todos.find((t) => t.id === id)
    if (!foundTodo) return res.status(404).json({ success: false, error: 'Todo not found!' })
    const updatedTodos = todos.filter((t) => t.id !== foundTodo.id)
    await fs.writeFile(path, JSON.stringify(updatedTodos, null, 2), 'utf8')
    res.status(200).json({success: true, message: 'Todo deleted successfully!', data: foundTodo})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

