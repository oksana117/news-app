//import { useState } from "react";
//import axios from 'axios';
//import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
function Home() {
     
    return (
        <div>
            <h1>My Articles</h1>
        <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Title</th><th>Source</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Remove</th>
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

export default Home;