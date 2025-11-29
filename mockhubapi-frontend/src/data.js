export const users = [
  {
    method: 'GET',
    url: '/users',
    description: 'Get all users'
  },
  {
    method: 'POST',
    url: '/users',
    description: 'Create new user'
  },
  {
    method: 'DELETE',
    url: '/users/{id}',
    description: 'Delete user by ID'
  },
  {
    method: 'GET',
    url: '/users/{id}',
    description: 'Get user by ID'
  },
  {
    method: 'PUT',
    url: '/users/{id}',
    description: 'Update user'
  },
  {
    method: 'PATCH',
    url: '/users/{id}',
    description: 'Partial update user'
  }
]

export const posts = [
  {
    method: 'GET',
    url: '/posts',
    description: 'Get all posts '
  },
  {
    method: 'POST',
    url: '/posts',
    description: 'Create new post'
  },
  {
    method: 'DELETE',
    url: '/posts/{id}',
    description: 'Delete post by ID'
  },
  {
    method: 'GET',
    url: '/posts/{id}',
    description: 'Get post by ID'
  },
  {
    method: 'PUT',
    url: '/posts/{id}',
    description: 'Update post'
  },
  {
    method: 'PATCH',
    url: '/posts/{id}',
    description: 'Partial update post'
  }
]

export const todos = [
  {
    method: 'GET',
    url: '/todos',
    description: 'Get all todos'
  },
  {
    method: 'POST',
    url: '/todo',
    description: 'Create new todo'
  },
  {
    method: 'DELETE',
    url: '/todo/{id}',
    description: 'Delete todo by ID'
  },
  {
    method: 'GET',
    url: '/todo/{id}',
    description: 'Get todo by ID'
  },
  {
    method: 'PUT',
    url: '/todo/{id}',
    description: 'Update todo'
  },
  {
    method: 'PATCH',
    url: '/todo/{id}',
    description: 'Partial update todo'
  }
]