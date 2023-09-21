
import React, { useState, useEffect } from 'react';
import authToken from '../../API/authToken';
import BASE_URL from '../../API/index';

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setPostList(data); // Assuming the response is an array of posts
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div>
      <h1>Post Section</h1>
      <ul>
        {postList.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
