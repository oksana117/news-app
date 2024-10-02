import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useState } from "react";
import "./app.css";

function Search() {
  const [query, setQuery] = useState("");
  const [news, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const addToFavorites = (article) => {
    const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage
    if (!userId) {
      console.error('User not logged in');
      return;
    }
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
    .catch(error => console.error('Error:', error.message));
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
          if (data && data.data && Array.isArray(data.data)) {
            setData(data.data);
            saveSearchHistory(query); // Save search query to history
          } else {
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
        {/* Pagination logic here */}
      </div>
    </div>
  );
}

export default Search;
