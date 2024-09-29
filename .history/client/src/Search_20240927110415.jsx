
import Table from 'react-bootstrap/Table';
import 'font-awesome/css/font-awesome.min.css';



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
                        <th> <p ></p></th>
                      
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
}

export default Search;