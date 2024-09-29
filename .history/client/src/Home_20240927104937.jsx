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
          <th>Title</th>
          <th>Source</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
            </Table>
            </div>
 
    );
}

export default Home;