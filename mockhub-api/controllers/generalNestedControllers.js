import { error } from "node:console";
import { getPostsData, getTodosData, getUsersData } from "../utils/getData.js";
import { pathToResource } from "../utils/getData.js";
import fs from "node:fs/promises";

const todoPath = pathToResource("todos.json");
const postsPath = pathToResource("posts.json");

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
        return res.status(400).json({
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
      return res.status(400).json({
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
        return res.status(400).json({
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
    res.status(201).json({
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
    const userId = Number(req.params.userId);
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

export const updateUserTodo = async (req, res) => {
  try {
    const userId = Number(req.params.userId);
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
    let { title, description, completed } = req.body;
    if (!title || !description || completed === undefined) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required!" });
    }
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
        .json({ success: false, error: "Completed must be a boolean" });
    }
    const updatedTodo = {
      id: todoId,
      userId,
      title,
      description,
      completed,
    };
    const index = todos.findIndex((t) => t.id === foundTodo.id);
    todos[index] = updatedTodo;
    await fs.writeFile(todoPath, JSON.stringify(todos, null, 2), "utf8");
    res
      .status(200)
      .json({
        success: true,
        message: "Todo updated successfully",
        data: updatedTodo,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const partialUpdateUserTodo = async (req, res) => {
  try {
    const userId = Number(req.params.userId);
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
    let { title, description, completed } = req.body;
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
          .json({ success: false, error: "Completed must be a boolean" });
      }
    }
    const updatedTodo = {
      id: todoId,
      userId,
      title: title ? title : foundTodo.title,
      description: description ? description : foundTodo.description,
      completed: completed !== undefined ? completed : foundTodo.completed,
    };
    const index = todos.findIndex((t) => t.id === foundTodo.id);
    todos[index] = updatedTodo;
    await fs.writeFile(todoPath, JSON.stringify(todos, null, 2), "utf8");
    res
      .status(200)
      .json({
        success: true,
        message: "Todo updated successfully",
        data: updatedTodo,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUserTodo = async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const todoId = Number(req.params.todoId);
    if (isNaN(userId) || isNaN(todoId)) {
      return res
        .status(400)
        .json({ success: false, error: "ID's must be numeric values" });
    }
    const users = await getUsersData();
    const foundUser = users.find((u) => u.id === userId);
    if (!foundUser)
      return res.status(404).json({ success: false, error: "User not found!" });
    const todos = await getTodosData();
    const foundTodo = todos.find((t) => t.id === todoId && t.userId === userId);
    if (!foundTodo)
      return res.status(404).json({ success: false, error: "Todo not found!" });
    const updatedTodos = todos.filter((t) => t.id !== foundTodo.id);
    await fs.writeFile(todoPath, JSON.stringify(updatedTodos, null, 2), "utf8");
    res
      .status(200)
      .json({
        success: true,
        message: "Todo deleted successfully",
        data: foundTodo,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const generalSearch = async (req, res) => {
  try {
    const query = req.query.query.toLowerCase();
    if (!query) {
      return res
        .status(400)
        .json({ success: false, error: "query parameter is required" });
    }
    let matchedData;
    const users = await getUsersData();
    const posts = await getPostsData();
    const todos = await getTodosData();
    const usersCategory = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.address.city.toLowerCase().includes(query) ||
        user.address.street.toLowerCase().includes(query) ||
        user.address.country.toLowerCase().includes(query) ||
        user.company.toLowerCase().includes(query)
      );
    });

    const postsCategory = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query) ||
        post.comments.some((c) => c.body.toLowerCase().includes(query))
      );
    });

    const todosCategory = todos.filter((todo) => {
      return (
        todo.title.toLowerCase().includes(query) ||
        todo.description.toLowerCase().includes(query)
      );
    });

    matchedData =
      {
        users: usersCategory,
        posts: postsCategory,
        todos: todosCategory,
      } || [];

    res.status(200).json({ success: true, data: matchedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error.message);
  }
};

export const getUserPost = async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    if (isNaN(userId)) {
      return res
        .status(400)
        .json({ success: false, error: "ID must be a numeric value" });
    }
    const users = await getUsersData();
    const foundUser = users.find((u) => u.id === userId);
    if (!foundUser)
      return res.status(404).json({ success: false, error: "User not found!" });
    const posts = await getPostsData();
    let filteredData = posts.filter((post) => post.userId === userId);
    const { title, body } = req.query;
    if (title) {
      filteredData = filteredData.filter((data) =>
        data?.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (body) {
      filteredData = filteredData.filter((data) =>
        data?.body.toLowerCase().includes(body?.toLowerCase())
      );
    }
    res.status(200).json({ success: true, data: filteredData || [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error.message);
  }
};

export const getUserPostByPostId = async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const postId = Number(req.params.postId);
    if (isNaN(userId) || isNaN(postId)) {
      return res
        .status(400)
        .json({ success: false, error: "IDs must be numeric values" });
    }
    const users = await getUsersData();
    const foundUser = users.find((user) => user.id === userId);
    if (!foundUser)
      return res.status(404).json({ success: false, error: "User not found!" });
    const posts = await getPostsData();
    const foundPost = posts.find(
      (post) => post.userId === userId && post.id === postId
    );
    if (!foundPost)
      return res.status(404).json({ success: false, error: "Post not found!" });
    res.status(200).json({ success: true, data: foundPost });
    console.log("success");
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error.message);
  }
};

export const postUserPost = async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    if (isNaN(userId))
      return res
        .status(400)
        .json({ success: false, error: "IDs must be numeric values" });
    const users = await getUsersData();
    const foundUser = users.find((user) => user.id === userId);
    if (!foundUser)
      return res.status(400).json({ success: false, error: "User not found" });
    const { title, body } = req.body;
    if (!title || !body)
      return res
        .status(400)
        .json({ success: false, error: "body and title fields are required" });
    const posts = await getPostsData();
    const newId =
      posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    const newPost = {
      id: newId,
      title,
      userId,
      body,
      comments: [],
    };
    posts.push(newPost);
    await fs.writeFile(postsPath, JSON.stringify(posts, null, 2), "utf8");
    res
      .status(201)
      .json({
        success: true,
        message: "Post created successfully!",
        data: newPost,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error.message);
  }
};

export const updateUserPost = async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const postId = Number(req.params.postId);
    if (isNaN(userId) || isNaN(postId)) {
      return res
        .status(400)
        .json({ success: false, error: "ID's must be numeric values" });
    }
    const users = await getUsersData();
    const foundUser = users.find((user) => user.id === userId);
    if (!foundUser)
      return res.status(404).json({ success: false, error: "User not found!" });

    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ success: false, error: "Nothing to update" });
    }
    const { title, body } = req.body;
    if (!title || !body) {
      return res
        .status(400)
        .json({ success: false, error: "title and body fields are required!" });
    }
    const posts = await getPostsData();
    const foundPost = posts.find(
      (post) => post.id === postId && post.userId === userId
    );
    if (!foundPost)
      return res.status(404).json({ success: false, error: "Post not found!" });
    const updatedPost = {
      id: foundPost.id,
      title,
      body,
      userId,
      comments: foundPost.comments || [],
    };
    const index = posts.findIndex(
      (post) => post.id === postId && post.userId === userId
    );
    posts[index] = updatedPost;
    await fs.writeFile(postsPath, JSON.stringify(posts, null, 2), "utf8");
    res
      .status(200)
      .json({
        success: true,
        message: "Post updated successfully",
        data: updatedPost,
      });
  } catch (error) {
    if (error.message.includes("undefined")) {
      res.status(500).json({ error: "Nothing to update" });
    } else {
      res.status(500).json({ error: error.message });
    }
    console.error(error.message);
  }
};

export const partialUpdatePost = async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const postId = Number(req.params.postId);
    if (isNaN(userId) || isNaN(postId)) {
      return res
        .status(400)
        .json({ success: false, error: "ID's must be numeric values" });
    }
    const users = await getUsersData();
    const foundUser = users.find((user) => user.id === userId);
    if (!foundUser)
      return res.status(404).json({ success: false, error: "User not found!" });

    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ success: false, error: "Nothing to update" });
    }
    const { title, body } = req.body;
    const posts = await getPostsData();
    const foundPost = posts.find(
      (post) => post.id === postId && post.userId === userId
    );
    if (!foundPost)
      return res.status(404).json({ success: false, error: "Post not found!" });
    const updatedPost = {
      id: foundPost.id,
      title: title ? title : foundPost.title,
      body: body ? body : foundPost.body,
      userId,
      comments: foundPost.comments || [],
    };
    const index = posts.findIndex(
      (post) => post.id === postId && post.userId === userId
    );
    posts[index] = updatedPost;
    await fs.writeFile(postsPath, JSON.stringify(posts, null, 2), "utf8");
    res
      .status(200)
      .json({
        success: true,
        message: "Post updated successfully",
        data: updatedPost,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUserPost = async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const postId = Number(req.params.postId);
    if (isNaN(userId) || isNaN(postId)) {
      return res
        .status(400)
        .json({ success: false, error: "ID must be a numeric value" });
    }
    const users = await getUsersData()
    const foundUser = users.find((user) => user.id === userId)
    if (!foundUser) return res.status({ success: false, error: 'User not found!' })
    const posts = await getPostsData()
    const foundPost = posts.find((post) => post.id === postId && post.userId === userId)
    if (!foundPost) return res.status({ success: false, error: 'Post not found!' })
    const updatedPosts = posts.filter((post) => post.id !== foundPost.id)
    await fs.writeFile(postsPath, JSON.stringify(updatedPosts, null, 2), 'utf8')
    res.status(200).json({success: true, message: 'Post deleted successfully', data: {}})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
