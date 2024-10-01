//import { useState } from "react";

import './App.css'; // Import a CSS file for styling

function Home() {

//here is how you talk to the other compoment, but i will need to save it to the data base on click
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
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
