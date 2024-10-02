import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import a CSS file for styling


function Home() {
  const [favorites, setFavorites] = useState([]);
  const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3001/favorites/${userId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setFavorites(data);
        })
        .catch(error => console.error('Error fetching favorite articles:', error));
    }
  }, [userId]);

    const removeFromFavorites = (articleId) => {
    fetch('http://localhost:3001/favorites/remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, articleId })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Article removed from favorites') {
        setFavorites(prevFavorites => prevFavorites.filter(article => article._id !== articleId));
      } else {
        console.error('Error removing from favorites:', data.message);
      }
    })
    .catch(error => console.error('Error:', error.message));
  };

  return (
    <div className="home">
      <div className="favorites">
        <h2>Favorites</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Images</th>
              <th>Title</th>
              <th>Source</th>
              <th>Description</th>
              <th>Remove from favourites</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((article, index) => (
              <tr key={index}>
                <td><img src={article.image} alt={article.title} className="article-image" /></td>
                <td>{article.title}</td>
                <td><a href={article.url} target="_blank" rel="noopener noreferrer">{article.source}</a></td>
                <td>{article.description}</td>
                <td><button onClick={() => removeFromFavorites(article._id)}>Remove from Favorites</button>
                   <Link to={`/article/${article._id}`}><button>View More Details</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
