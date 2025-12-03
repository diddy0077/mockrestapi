import express from 'express'
import { getAllTodosForAUser,createNewTodoForUser,getUserTodoById,updateUserTodo,partialUpdateUserTodo,deleteUserTodo,generalSearch,getUserPost,getUserPostByPostId,postUserPost,updateUserPost,partialUpdatePost,deleteUserPost } from '../controllers/generalNestedControllers.js'

const nestedRouter = express.Router()


nestedRouter.get('/users/:id/todos', getAllTodosForAUser)
nestedRouter.post('/users/:id/todos', createNewTodoForUser)
nestedRouter.get('/users/:userId/todos/:todoId', getUserTodoById)
nestedRouter.put('/users/:userId/todos/:todoId', updateUserTodo)
nestedRouter.patch('/users/:userId/todos/:todoId', partialUpdateUserTodo)
nestedRouter.delete('/users/:userId/todos/:todoId', deleteUserTodo)
nestedRouter.get('/search', generalSearch)
nestedRouter.get('/users/:userId/posts', getUserPost)
nestedRouter.get('/users/:userId/posts/:postId', getUserPostByPostId)
nestedRouter.post('/users/:userId/posts', postUserPost)
nestedRouter.put('/users/:userId/posts/:postId', updateUserPost)
nestedRouter.patch('/users/:userId/posts/:postId', partialUpdatePost)
nestedRouter.delete('/users/:userId/posts/:postId', deleteUserPost)

export default nestedRouter