import fs from 'node:fs/promises'
import path from 'node:path'


const root = process.cwd()

export const pathToResource = (location) => {
  const pathToResource = path.join(root, 'data', location)
  return pathToResource;
}
export const getPostsData = async () => {
   const path = pathToResource('posts.json')
  const data = await fs.readFile(path, 'utf8')
  const posts = JSON.parse(data)
  return posts
}

export const getUsersData = async () => {
   const path = pathToResource('users.json')
  const data = await fs.readFile(path, 'utf8')
  const users = JSON.parse(data)
  return users
}

export const getTodosData = async () => {
   const path = pathToResource('todos.json')
  const data = await fs.readFile(path, 'utf8')
  const todos = JSON.parse(data)
  return todos
}