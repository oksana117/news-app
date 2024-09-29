import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useState } from "react";
import "./app.css";
import {addToFavorites} from './'

function Search({ addToFavorites }) {


  const [query, setQuery] = useState("");
  const [news, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  //const [favorites, setFavorites] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

   /*const addToFavorites = (article) => {
    setFavorites([...favorites, article]);
   };
  
   const removeFromFavorites = (article) => {
    setFavorites(favorites.filter(fav => fav.title !== article.title));
  };*/

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = news.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(news.length / rowsPerPage);

  useEffect(() => {
 
  if (query.length >= 2) {
      fetch(`http://localhost:3001/search?keywords=${query}`)
        .then(response => response.json())
        .then(data => {
          console.log('Fetched data:', data);
          if (data && data.data && Array.isArray(data.data)) {
            setData(data.data);
          } else {
            console.error('Expected an array but got:', data.data);
            setData([]);
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [query]);


return (
  <div className="app">
    <input
      className="search"
      placeholder="Search..."
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
    />
   <table className="styled-table">
        <thead>
          <tr>
          <th>Title</th>
          <th></th>
            <th>Source</th>
            <th>Publication Date</th>
          <th>Description</th>
          <th>Favourite</th>

          </tr>
        </thead>
        <tbody>
          {currentRows.map((article, index) => (
            <tr key={index}>
              <td>{article.title}</td>
               <td><img src={article.image} alt={article.title} className="article-image" /></td>
              <td><a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a></td>
             <td>{new Date(article.published_at).toLocaleDateString()}</td> 
              <td>{article.description}</td>
              <td><button onClick={() => addToFavorites(article)}>Add to Favorites</button></td>
      
              
            </tr>
          ))}
        </tbody>
      </table>
 <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
    </div>

     
  </div>
  
  
);
}



export default Search;
