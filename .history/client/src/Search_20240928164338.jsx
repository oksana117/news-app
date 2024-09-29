

import 'font-awesome/css/font-awesome.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";

import "./app.css";
//import SearchTableResult from "./SearchTableResult";


function Search() {
  const [query, setQuery] = useState("");
  const [news, setData] = useState([]);


  useEffect(() => {
 
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
}, [query]); 

return (
  <div className="app">
    <input
      className="search"
      placeholder="Search..."
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
    />
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Source</th>
          <th>Publication Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {news
          .filter(article => 
            article.title.toLowerCase().includes(query) ||
            article.description.toLowerCase().includes(query)
          )
          .map((article, index) => (
            <tr key={index}>
              <td>{article.title}</td>
              <td>{article.url}</td>
              <td>{article.published_at}</td>
              <td>{article.description}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);

}

export default Search;
//{<SearchTableResult data={data} />}