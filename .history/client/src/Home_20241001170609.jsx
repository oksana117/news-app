import { useEffect, useState } from 'react';
import './App.css'; // Import a CSS file for styling

function Home() {
  const [favorites, setFavorites] = useState([]);
  const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3001//home/favorites/${userId}`)
        .then(response => response.json())
        .then(data => {
          setFavorites(data);
        })
        .catch(error => console.error('Error fetching favorite articles:', error));
    }
  }, [userId]);

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
                <td><button>Remove from Favorites</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
