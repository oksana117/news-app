
import Table from 'react-bootstrap/Table';
import 'font-awesome/css/font-awesome.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Search() {

const data = ['apple', 'banana', 'orange'];

const fruitsList = data.map((fruit, index) => {
  return <li key={index}>{fruit}</li>;
});

// Render the list in JSX
<ul>
  {fruitsList}
</ul>
     

          
 

        
    );
}

export default Search;