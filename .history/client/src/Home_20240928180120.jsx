import { useEffect, useState } from "react";
import Search from './Search';
import './App.css'; // Import a CSS file for styling

function Home() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (article) => {
    setFavorites([...favorites, article]);
  };

  const removeFromFavorites = (article) => {
    setFavorites(favorites.filter(fav => fav.title !== article.title));
  };

  return (
    <div className="home">
      <Search addToFavorites={addToFavorites} />
      <div className="favorites">
        <h2>Favorites</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Source</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((fav, index) => (
              <tr key={index}>
                <td><img src={fav.image_url} alt={fav.title} className="article-image" /></td>
                <td>{fav.title}</td>
                <td><a href={fav.url} target="_blank" rel="noopener noreferrer">{fav.url}</a></td>
                <td>
                  <button onClick={() => removeFromFavorites(fav)}>Remove from Favorites</button>
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
