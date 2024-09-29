
import Table from 'react-bootstrap/Table';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const element = <FontAwesomeIcon icon={['fak', 'my-icon']} />

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
                        <td><FontAwesomeIcon icon="fa-regular fa-heart"/></td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
}

export default Search;