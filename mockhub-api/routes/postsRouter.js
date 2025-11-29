import express from 'express'
import { getAllPost,getPostById, getPostComments,getPostCommentById,createNewPost,createNewComment,partialPostUpdate,partialCommentUpdate,updatePost, updateComment,deletePost,deleteCommentById } from '../controllers/postControllers.js'

const postRouter = express.Router()

postRouter.get('/posts', getAllPost)
postRouter.get('/posts/:id', getPostById)
postRouter.get('/posts/:id/comments', getPostComments)
postRouter.get('/posts/:id/comments/:commentId', getPostCommentById)
postRouter.post('/posts', createNewPost)
postRouter.post('/posts/:id/comments', createNewComment)
postRouter.patch('/posts/:id', partialPostUpdate)
postRouter.patch('/posts/:id/comments/:commentId', partialCommentUpdate)
postRouter.put('/posts/:id', updatePost)
postRouter.put('/posts/:id/comments/:commentId', updateComment)
postRouter.delete('/posts/:id', deletePost)
postRouter.delete('/posts/:id/comments/:commentId', deleteCommentById)

export default postRouter