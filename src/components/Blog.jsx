import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  }

  const handleCreate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/components/Blog', newPost);
      setPosts([...posts, response.data]);
      setNewPost({ title: '', content: '' });
      setIsCreating(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Blog</h1>
      {
        posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))
      }
      {isCreating ? (
        <form onSubmit={handleCreate}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleChange}
          />
          <label htmlFor="content">Content:</label>
          <textarea
            name="content"
            value={newPost.content}
            onChange={handleChange}
          />
          <button type="submit">Create</button>
          <button onClick={() => setIsCreating(false)}>Cancel</button>
        </form>
      ) : (
        <button onClick={() => setIsCreating(true)}>Create a new post</button>
      )}
    </div>
  );
}

export default Blog;
