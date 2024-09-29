

import 'font-awesome/css/font-awesome.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
//import { Users } from "./users";
import "./app.css";
import SearchTableResult from "./SearchTableResult";
import axios from "axios";




function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3001/search?keywords=${query}`);
        setData(res.data);
      
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
    console.log(query);
    console.log(data);
    return (
      <div>
            <h1>News Articles</h1>
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </li>
                ))}
            </ul>
        </div>   
      /*
    <div className="app">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      {<SearchTableResult data={data} />}
    </div>
  );
}

export default Search;