

import 'font-awesome/css/font-awesome.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
//import { Users } from "./users";
import "./app.css";
//import SearchTableResult from "./SearchTableResult";
import axios from "axios";



//`http://localhost:3001/search?keywords=${query}`

function Search() {
  const [query, setQuery] = useState("");
  const [news, setData] = useState([]);


  /*useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3001/search?keywords=${query}`);
        setData(res.data);
      
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
     console.log(query);
  console.log(news); //data is passed here
  // const dataKeys = Object.keys(news)
 //console.log(dataKeys);*/
  
   useEffect(() => {
    // Replace 'YOUR_API_URL' with the actual API endpoint
    fetch(`http://localhost:3001/search?keywords=${query}`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data to see its structure
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
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
          {Array.isArray(news) && news
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