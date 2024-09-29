
import Table from 'react-bootstrap/Table';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





function Search() {
     
    return (
        <div>
            

            <h1>Latests News Articles</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Title</th><th>Source</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th><i className="fa fa-pencil" title="Edit"></i> </th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td> </td>
                    </tr>

                </tbody>
            </Table>
             <div>
    <FontAwesomeIcon icon="fa-solid fa-check-square" />
    Your <FontAwesomeIcon icon="fa-regular fa-coffee" /> is hot!

    Compliments of the <FontAwesomeIcon icon="fa-sharp fa-solid fa-hat-chef" />!

    And a Sharp Duotone Solid Icon example.
    <FontAwesomeIcon icon="fa-sharp-duotone fa-solid fa-dog" />

  </div>
        </div>
        
    );
}

export default Search;