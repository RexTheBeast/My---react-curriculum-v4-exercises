import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleClick() {
    setLoading(true);
    setError(null);

    getSinglePost(1)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleClick}>
        Get post
      </button>
      <div className="content">
        {loading && <p>Loading Post...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && !error && post && (
          <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
        {!loading && !error && !post && (
          <p>
            TODO: Replace me with fetched data when the <code>Get post</code>{' '}
            button is clicked
          </p>
        )}
      </div>
    </div>
  );
}
