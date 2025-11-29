import { getPostsData } from "../utils/getData.js";
import { pathToResource } from "../utils/getData.js";
import fs from "node:fs/promises";

export const getAllPost = async (req, res) => {
  try {
    const posts = await getPostsData();
    const { body, title, userId } = req.query;

    let filteredPosts = posts;

    if (body) {
      filteredPosts = filteredPosts.filter((post) =>
        post.body.toLowerCase().includes(body.toLowerCase())
      );
    }

    if (title) {
      filteredPosts = filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (userId) {
      filteredPosts = filteredPosts.filter(
        (post) => post.userId === Number(userId)
      );
    }

    if (filteredPosts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No posts found matching your criteria",
      });
    }

    res.status(200).json({ success: true, data: filteredPosts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const posts = await getPostsData();
    const foundPost = posts.find((post) => {
      return post.id === Number(id);
    });
    if (!foundPost) {
      return res.status(404).json({ success: false, error: `post not found!` });
    }
    res.status(200).json({ success: true, data: foundPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPostComments = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const posts = await getPostsData();
    const foundPost = posts.find((post) => post.id === id);
    if (!foundPost)
      return res
        .status(404)
        .json({ success: false, message: "Post not found!" });
    res.status(200).json({ success: true, data: foundPost.comments || [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPostCommentById = async (req, res) => {
  try {
    const commentId = Number(req.params.commentId);
    const id = Number(req.params.id);
    const posts = await getPostsData();
    const foundPost = posts.find((post) => post.id === id);
    if (!foundPost)
      return res
        .status(404)
        .json({ success: false, message: "Post not found!" });
    const foundComment = foundPost.comments.find(
      (comment) => comment.id === commentId
    );
    if (!foundComment)
      return res
        .status(404)
        .json({ success: false, message: "No comment found with that id" });
    return res.status(200).json({ success: true, data: foundComment || {} });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const createNewPost = async (req, res) => {
  try {
    const posts = await getPostsData();
    const { title, body, userId, comments } = req.body;
    if (!title || !body || !userId || !comments) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required!" });
    }
    if (!Array.isArray(comments)) {
      return res.status(400).json({
        success: false,
        message: "Comments must be an array",
      });
    }
    const convertedUserId = Number(userId);
    if (!Number.isInteger(convertedUserId)) {
      return res
        .status(400)
        .json({ success: false, error: "userId must be a number" });
    }
    for (const c of comments) {
      const commentUserId = Number(c.userId);
      if (!c.body || !c.userId || !Number.isInteger(commentUserId)) {
        return res.status(400).json({
          success: false,
          error: "Each comment must include a body and a numeric userId",
        });
      }
      c.userId = commentUserId;
    }

    const processedComments = comments.map((comment, index) => {
      return {
        id: index + 1,
        postId: posts.length + 1,
        body: comment.body,
        userId: comment.userId,
      };
    });

    const path = pathToResource("posts.json");
    const newPost = {
      id: posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1,
      title,
      userId: convertedUserId,
      body,
      comments: processedComments,
    };
    posts.push(newPost);
    await fs.writeFile(path, JSON.stringify(posts, null, 2), "utf8");
    res.status(201).json({
      success: true,
      message: "Post created successfully!",
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewComment = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { body, userId } = req.body;
    if (!body || !userId)
      return res
        .status(400)
        .json({ status: false, error: "body and userId field are required" });
    if (!body.trim()) {
      return res
        .status(400)
        .json({ success: false, error: "body cannot be empty" });
    }
    const convertedUserId = Number(userId);
    if (!Number.isInteger(convertedUserId)) {
      return res
        .status(400)
        .json({ success: false, error: "userId must be a number" });
    }
    const posts = await getPostsData();
    const foundPost = posts.find((p) => p.id === id);
    if (!foundPost)
      return res.status(404).json({ success: false, error: "Post not found!" });
    const nextCommentId =
      foundPost.comments.length > 0
        ? Math.max(...foundPost.comments.map((c) => c.id)) + 1
        : 1;
    const newComment = {
      id: nextCommentId,
      postId: foundPost.id,
      userId: convertedUserId,
      body: body.trim(),
    };
    foundPost.comments.push(newComment);
    const path = pathToResource("posts.json");
    await fs.writeFile(path, JSON.stringify(posts, null, 2), "utf8");
    res.status(201).json({
      success: true,
      message: "comment created successfully!",
      data: newComment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const partialPostUpdate = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { title, body, userId } = req.body;
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        error: "No fields provided to update",
      });
    }
    const posts = await getPostsData();
    const foundPost = posts.find((p) => p.id === id);
    if (!foundPost) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }
    const convertedUserId =
      userId !== undefined ? Number(userId) : foundPost.userId;
    if (userId !== undefined && !Number.isInteger(convertedUserId)) {
      return res
        .status(400)
        .json({ success: false, error: "userId must be a number" });
    }

    const updatedPost = {
      id: foundPost.id,
      userId: userId ? Number(convertedUserId) : foundPost.userId,
      body: body ? body.trim() : foundPost.body,
      title: title ? title.trim() : foundPost.title,
      comments: foundPost.comments,
    };
    const foundIndex = posts.findIndex((p) => p.id === id);
    posts[foundIndex] = updatedPost;
    const path = pathToResource("posts.json");
    await fs.writeFile(path, JSON.stringify(posts, null, 2), "utf8");
    res.status(200).json({
      success: true,
      message: "Post updated successfully!",
      data: updatedPost,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const partialCommentUpdate = async (req, res) => {
  try {
    const postId = Number(req.params.id);
    const commentId = Number(req.params.commentId);
    let { body, userId } = req.body;
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        error: "No fields provided to update",
      });
    }
    const posts = await getPostsData();
    const foundPost = posts.find((p) => p.id === postId);
    if (!foundPost)
      return res.status(404).json({ success: false, error: "Post not found!" });
    const foundComment = foundPost.comments.find((c) => c.id === commentId);
    if (!foundComment)
      return res
        .status(404)
        .json({ success: false, error: "Comment not found!" });
    let convertedUserId;

    if (userId !== undefined) {
      const temp = Number(userId);
      if (!Number.isInteger(temp)) {
        return res
          .status(400)
          .json({ success: false, error: "userId must be a number" });
      }
      convertedUserId = temp;
    }

    const updatedComment = {
      id: foundComment.id,
      postId: foundPost.id,
      userId:
        convertedUserId !== undefined ? convertedUserId : foundComment.userId,
      body: body !== undefined ? body.trim() : foundComment.body,
    };

    const commentIndex = foundPost.comments.findIndex(
      (c) => c.id === commentId
    );
    foundPost.comments[commentIndex] = updatedComment;
    const postIndex = posts.findIndex((p) => p.id === postId);
    posts[postIndex] = foundPost;
    const path = pathToResource("posts.json");
    await fs.writeFile(path, JSON.stringify(posts, null, 2), "utf8");
    res.status(200).json({
      success: true,
      message: "Comment updated successfully!",
      data: updatedComment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const posts = await getPostsData();
    const foundPost = posts.find((p) => p.id === id);
    if (!foundPost)
      return res.status(404).json({ success: false, error: "Post not found!" });
    const { body, title, userId } = req.body;
    if (!body || !title || !userId) {
      return res.status(400).json({ success: false, error: "All fields are required!" });
    }
    let convertedUserId;

    if (userId !== undefined) {
      const temp = Number(userId);
      if (!Number.isInteger(temp)) {
        return res
          .status(400)
          .json({ success: false, error: "userId must be a number" });
      }
      convertedUserId = temp;
    }
    const updatedPost = {
      id: foundPost.id,
      body: body.trim(),
      userId: convertedUserId,
      title: title.trim(),
      comments: foundPost.comments
    }
    const index = posts.findIndex((p) => p.id === id)
    posts[index] = updatedPost
    const path = pathToResource("posts.json");
    await fs.writeFile(path, JSON.stringify(posts, null, 2), "utf8");
    res.status(200).json({
      success: true,
      message: "Post updated successfully!",
      data: updatedPost,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateComment = async (req, res) => {
  try {
    const postId = Number(req.params.id)
  const commentId = Number(req.params.commentId)
  const { body, userId } = req.body
  if (!body || !userId) {
    return res.status(400).json({success: false, error: 'All fields are required!'})
  }
  let convertedUserId;

    if (userId !== undefined) {
      const temp = Number(userId);
      if (!Number.isInteger(temp)) {
        return res
          .status(400)
          .json({ success: false, error: "userId must be a number" });
      }
      convertedUserId = temp;
  }
  const posts = await getPostsData()
  const foundPost = posts.find((p) => p.id === postId)
  if (!foundPost) return res.status(404).json({ success: false, error: 'Post not found!' })
  const foundComment = foundPost.comments.find((c) => c.id === commentId)
  if (!foundComment) return res.status(404).json({ success: false, error: 'Comment not found!' })
  const updatedComment = {
    id: foundComment.id,
    postId: foundPost.id,
    body: body.trim(),
    userId: convertedUserId
  }
  const commentIndex = foundPost.comments.findIndex((c) => c.id === commentId)
  foundPost.comments[commentIndex] = updatedComment
  const postIndex = posts.findIndex((p) => p.id === postId)
  posts[postIndex] = foundPost
  const path = pathToResource("posts.json");
    await fs.writeFile(path, JSON.stringify(posts, null, 2), "utf8");
    res.status(200).json({
      success: true,
      message: "Comment updated successfully!",
      data: updatedComment,
    });
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const deletePost = async (req, res) => {
   try {
    let id = Number(req.params.id)
   if (id !== undefined) {
      const temp = Number(id);
      if (!Number.isInteger(temp)) {
        return res
          .status(400)
          .json({ success: false, error: "id must be a number" });
      }
      id = temp;
     }
     const posts = await getPostsData()
     const foundPost = posts.find((p) => p.id === id)
     if (!foundPost) {
       return res.status(404).json({success: false, error: 'Post not found'})
     }
     const updatedPosts = posts.filter((p) => p.id !== foundPost.id)
     const path = pathToResource("posts.json");
    await fs.writeFile(path, JSON.stringify(updatedPosts, null, 2), "utf8");
    res.status(200).json({
      success: true,
      message: "Post deleted successfully!",
      data: foundPost,
    });
   } catch (error) {
    res.status(500).json({error: error.message})
   } 
}

export const deleteCommentById = async (req, res) => {
  try {
    let id = Number(req.params.id);
    let commentId = Number(req.params.commentId);

    if (!Number.isInteger(id)) {
      return res.status(400).json({ success: false, error: "id must be a number" });
    }

    if (!Number.isInteger(commentId)) {
      return res.status(400).json({ success: false, error: "commentId must be a number" });
    }

    const posts = await getPostsData();

    const foundPost = posts.find((p) => p.id === id);
    if (!foundPost) {
      return res.status(404).json({ success: false, error: "Post not found!" });
    }

    const foundComment = foundPost.comments.find((c) => c.id === commentId);
    if (!foundComment) {
      return res.status(404).json({ success: false, error: "Comment not found!" });
    }

    const updatedComments = foundPost.comments.filter((c) => c.id !== commentId);

    const updatedPost = {
      ...foundPost,
      comments: updatedComments,
    };

    const index = posts.findIndex((p) => p.id === id);
    posts[index] = updatedPost;

    const filePath = pathToResource("posts.json");
    await fs.writeFile(filePath, JSON.stringify(posts, null, 2), "utf8");

    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully!",
      data: updatedComments,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
