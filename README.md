# MockHub API

A comprehensive fake REST API designed for developers to test, prototype, and develop applications without touching a real database. Built with Express.js and featuring a beautiful React frontend documentation interface.

## 🚀 Live Demo

- **API Base URL**: https://mockhub-api.onrender.com
- **Frontend Documentation**: https://mockhub-api.netlify.com (when running locally)
- **Local API**: http://localhost:10000

## ✨ Features

- **📊 Complete CRUD Operations** - Full create, read, update, delete functionality
- **🔍 Global Search** - Search across all resources (users, posts, todos)
- **🔧 Advanced Filtering** - Query parameters for flexible data filtering
- **🌿 Nested Resources** - Hierarchical data relationships (user posts, post comments, etc.)
- **✅ Input Validation** - Comprehensive server-side validation
- **📱 Responsive Design** - Beautiful React frontend with Tailwind CSS
- **🔄 Real-time Updates** - Data persists across sessions via JSON files
- **📚 Interactive Documentation** - Built-in examples and copy-to-clipboard functionality

## 🏗️ Project Structure

```
mockrestapi/
├── mockhub-api/              # Backend API
│   ├── controllers/          # Route controllers
│   ├── data/                # JSON data files
│   ├── routes/              # Express routes
│   ├── utils/               # Utility functions
│   ├── package.json         # Backend dependencies
│   └── server.js            # Main server file
└── mockhubapi-frontend/      # Frontend React app
    ├── src/
    │   ├── components/      # Reusable UI components
    │   ├── pages/          # Page components
    │   └── assets/         # Static assets
    ├── package.json        # Frontend dependencies
    └── vite.config.js      # Vite configuration
```

## 🛠️ Technology Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Faker.js** - Fake data generation
- **Validator** - Input validation
- **UUID** - Unique identifier generation

### Frontend

- **React 19** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd mockhub-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Or start in production mode:**
   ```bash
   npm start
   ```

The API will be available at `http://localhost:10000`

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd mockhubapi-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

## 📊 API Documentation

### Base URL

```
https://mockhub-api.com/api
```

### Resources Overview

#### 1. Users

- **GET** `/users` - Get all users
- **GET** `/users/:id` - Get user by ID
- **POST** `/users` - Create new user
- **PUT** `/users/:id` - Update user (full update)
- **PATCH** `/users/:id` - Partial user update
- **DELETE** `/users/:id` - Delete user

#### 2. Posts

- **GET** `/posts` - Get all posts
- **GET** `/posts/:id` - Get post by ID
- **POST** `/posts` - Create new post
- **PUT** `/posts/:id` - Update post (full update)
- **PATCH** `/posts/:id` - Partial post update
- **DELETE** `/posts/:id` - Delete post

#### 3. Comments (Nested under Posts)

- **GET** `/posts/:id/comments` - Get all comments for a post
- **GET** `/posts/:id/comments/:commentId` - Get specific comment
- **POST** `/posts/:id/comments` - Add comment to post
- **PUT** `/posts/:id/comments/:commentId` - Update comment (full update)
- **PATCH** `/posts/:id/comments/:commentId` - Partial comment update
- **DELETE** `/posts/:id/comments/:commentId` - Delete comment

#### 4. Todos

- **GET** `/todos` - Get all todos
- **GET** `/todos/:id` - Get todo by ID
- **POST** `/todos` - Create new todo
- **PUT** `/todos/:id` - Update todo (full update)
- **PATCH** `/todos/:id` - Partial todo update
- **DELETE** `/todos/:id` - Delete todo

### Nested Routes

#### User Posts

- **GET** `/users/:userId/posts` - Get all posts for a specific user
- **GET** `/users/:userId/posts/:postId` - Get specific user post
- **POST** `/users/:userId/posts` - Create post for user
- **PUT** `/users/:userId/posts/:postId` - Update user post (full update)
- **PATCH** `/users/:userId/posts/:postId` - Partial user post update
- **DELETE** `/users/:userId/posts/:postId` - Delete user post

#### User Todos

- **GET** `/users/:userId/todos` - Get all todos for a specific user
- **GET** `/users/:userId/todos/:todoId` - Get specific user todo
- **POST** `/users/:userId/todos` - Create todo for user
- **PUT** `/users/:userId/todos/:todoId` - Update user todo (full update)
- **PATCH** `/users/:userId/todos/:todoId` - Partial user todo update
- **DELETE** `/users/:userId/todos/:todoId` - Delete user todo

### Global Search

- **GET** `/search?query=keyword` - Search across all resources

## 🔍 Query Parameters & Filtering

### Available Filters

#### Posts

- `userId` - Filter by user ID
- `title` - Search in post titles (case-insensitive)
- `body` - Search in post content (case-insensitive)

#### Users

- `name` - Filter by name
- `username` - Filter by username
- `email` - Filter by email
- `company` - Filter by company
- `city` - Filter by city
- `street` - Filter by street

#### Todos

- `userId` - Filter by user ID
- `title` - Search in todo titles (case-insensitive)
- `description` - Search in todo descriptions (case-insensitive)
- `completed` - Filter by completion status (true/false)

### Example Requests

```javascript
// Get all posts by user ID 1
fetch("https://mockhub-api.com/api/posts?userId=1");

// Search posts by title
fetch("https://mockhub-api.com/api/posts?title=example");

// Get completed todos for user 1
fetch("https://mockhub-api.com/api/todos?userId=1&completed=true");

// Filter users by city
fetch("https://mockhub-api.com/api/users?city=New York");

// Global search
fetch("https://mockhub-api.com/api/search?query=example");
```

## 💾 Data Structure

### User Object

```json
{
  "id": 1,
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "zip": "12345",
    "country": "USA"
  },
  "company": "Tech Corp",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### Post Object

```json
{
  "id": 1,
  "userId": 1,
  "title": "Post Title",
  "body": "Post content...",
  "comments": [
    {
      "id": 1,
      "postId": 1,
      "userId": 2,
      "body": "Comment content..."
    }
  ]
}
```

### Todo Object

```json
{
  "id": 1,
  "userId": 1,
  "title": "Todo Title",
  "description": "Todo description...",
  "completed": false
}
```

## 🧪 Testing Examples

### Create a New User

```javascript
fetch("https://mockhub-api.com/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Jane Doe",
    username: "janedoe",
    email: "jane@example.com",
    phone: "987-654-3210",
    address: {
      street: "456 Oak St",
      city: "Somewhere",
      zip: "54321",
      country: "USA",
    },
    company: "Design LLC",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Create a New Post

```javascript
fetch("https://mockhub-api.com/api/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My First Post",
    body: "This is the content of my post.",
    userId: 1,
    comments: [
      {
        userId: 2,
        body: "Great post!",
      },
    ],
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Update a Todo

```javascript
fetch("https://mockhub-api.com/api/todos/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    completed: true,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Global Search

```javascript
fetch("https://mockhub-api.com/api/search?query=javascript")
  .then((res) => res.json())
  .then((data) => {
    console.log("Users:", data.data.users);
    console.log("Posts:", data.data.posts);
    console.log("Todos:", data.data.todos);
  });
```

## 🎨 Frontend Features

### Interactive Documentation

- **Copy-to-clipboard** functionality for all examples
- **Syntax highlighting** for code snippets
- **Responsive design** for all devices
- **Live examples** that can be tested directly

### Pages

1. **HomePage** - Overview and features
2. **GuidePage** - Complete API documentation with examples

### Components

- **Header** - Navigation and branding
- **Footer** - Links and information
- **EndPoints** - Interactive endpoint explorer

## 🔧 Development

### Backend Development

```bash
cd mockhub-api
npm run dev  # Uses nodemon for auto-reload
```

### Frontend Development

```bash
cd mockhubapi-frontend
npm run dev  # Vite dev server with hot reload
```

### Building for Production

```bash
# Frontend
cd mockhubapi-frontend
npm run build

# Backend is already production-ready with 'npm start'
```

## 📁 Data Management

### Data Storage

- All data is stored in JSON files in the `mockhub-api/data/` directory
- Files are automatically updated when changes are made via API
- Data persists across server restarts

### Data Files

- `users.json` - User data
- `posts.json` - Posts and comments
- `todos.json` - Todo items

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Daniel Udeh** - Full-stack Developer  
[Portfolio](https://danieludeh.netlify.app/)

## 🙏 Acknowledgments

- Faker.js for generating realistic fake data
- Express.js community for the excellent framework
- React team for the amazing UI library
- Tailwind CSS for the utility-first CSS framework

## 📞 Support

For questions, issues, or contributions, please visit the project repository or contact the author.

---

**Happy coding! 🚀**
