import { useState } from "react";
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
//here is how you talk to the other compoment, but i will need to save it to the data base on click
  return (
    <div className="home">
      <Search addToFavorites={addToFavorites} /> 
      <dgit className="favorites">
        <h2>Favorites</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Image here</th>
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
      </dgit remote add origin https://github.com/oksana117/madelevators.git
git branch -M main
git push -u origin mainiv>
    </div>
  );
}

export default Home;
