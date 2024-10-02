import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useState } from "react";
import "./app.css";

function Search() {
  const [query, setQuery] = useState("");
  const [news, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
 // const [ setFavorites] = useState([]);
  //const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const addToFavorites = (article) => {
    const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage
    if (!userId) {
      console.error('User not logged in');
      return;
    }
    console.log("got to add fav");
    fetch('http://localhost:3001/search/addfav', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        articleId: article._id,
        title: article.title,
        image: article.image,
        source: article.source,
        url: article.url,
        pub_date: article.published_at,
        description: article.description
      })
    })
    .then(response => response.json())
   /* .then(data => {
      if (data.message === "Article saved and liked successfully") {
        setFavorites(prevFavorites => [...prevFavorites, article]);
      } else {
        console.error('Error adding to favorites:', data.message);
      }
    })*/
      .catch(error => console.error('Error:', error.message));
    console.log(article.published_at);
  };
  
const saveSearchHistory = (query) => {
    const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage
    if (!userId) {
        console.error('User not logged in');
        return;
    }
    fetch('http://localhost:3001/search/savehistory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            query
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            console.log(data.message);
        }
    })
    .catch(error => console.error('Error:', error.message));
};

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
            saveSearchHistory(query);
          } else {
            console.error('Expected an array but got:', data.data);
            setData([]);
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [query]);
console.log(data)
  return (
    <div className="app">
      <br></br> <br></br>
      <input
        className="search"
        placeholder="Search for latest news..."
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
              <td><a href={article.url} target="_blank" rel="noopener noreferrer">{article.source}</a></td>
              <td>{new Date(article.published_at).toLocaleDateString()}</td>
              <td>{article.description}</td>
              <td><button className="btn btn-outline-info" onClick={() => addToFavorites(article)}>Add to Favourites <span className="fa fa-solid fa-heart fa-lg" aria-hidden="true"></span></button></td>
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
