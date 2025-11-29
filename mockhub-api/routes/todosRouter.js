import express from 'express'
import { getAllTodos,getTodoById , createNewTodo,updateTodo, partialUpdateTodo,deleteTodo} from '../controllers/todosControllers.js'

const todoRouter = express.Router()


todoRouter.get('/todos', getAllTodos)
todoRouter.get('/todos/:id', getTodoById)
todoRouter.post('/todos', createNewTodo)
todoRouter.put('/todos/:id', updateTodo)
todoRouter.patch('/todos/:id', partialUpdateTodo)
todoRouter.delete('/todos/:id', deleteTodo)

export default todoRouter