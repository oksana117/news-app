

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


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3001/search?keywords=${query}`);
        setData(res.data);
      
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
     console.log(query);
  console.log(news); //data is passed here
   const dataKeys = Object.keys(news)
 console.log(dataKeys);
    return (
        
   
  );
}

export default Search;
//{<SearchTableResult data={data} />}