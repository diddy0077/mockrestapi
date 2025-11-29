import express from 'express'
import { getAllTodosForAUser,createNewTodoForUser,getUserTodoById } from '../controllers/generalNestedControllers.js'

const nestedRouter = express.Router()


nestedRouter.get('/users/:id/todos', getAllTodosForAUser)
nestedRouter.post('/users/:id/todos', createNewTodoForUser)
nestedRouter.post('/users/:userId/todos/:todoId', createNewTodoForUser)

export default nestedRouter