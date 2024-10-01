import { useState } from "react";
import Search from './Search';
import './App.css'; // Import a CSS file for styling

function Home() {

//here is how you talk to the other compoment, but i will need to save it to the data base on click
  return (
    <div className="home">
      <Search addToFavorites={addToFavorites} /> 
      <div className="favorites">
        <h2>Favorites</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Images</th>
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
