import express from 'express'
import cors from 'cors'
import postRouter from './routes/postsRouter.js'
import usersRouter from './routes/usersRouter.js'
import todoRouter from './routes/todosRouter.js'
import nestedRouter from './routes/generalNestedRouter.js'

const app = express()
const PORT = process.env.PORT || 10000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', postRouter)
app.use('/api', usersRouter)
app.use('/api', todoRouter)
app.use('/api', nestedRouter)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))