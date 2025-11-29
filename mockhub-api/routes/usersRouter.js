import express from 'express'
import { getAllUsers, getUserById, createNewUser, partialUserUpdate, updateUser, deleteUser } from '../controllers/usersController.js'

const usersRouter = express.Router()


usersRouter.get('/users', getAllUsers)
usersRouter.get('/users/:id', getUserById)
usersRouter.post('/users', createNewUser)
usersRouter.patch('/users/:id', partialUserUpdate)
usersRouter.put('/users/:id', updateUser)
usersRouter.delete('/users/:id', deleteUser)


export default usersRouter