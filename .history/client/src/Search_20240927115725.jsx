
import Table from 'react-bootstrap/Table';
import 'font-awesome/css/font-awesome.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
//import { Users } from "./users";
import "./app.css";
import SearchTableResultjsxjsx from "./SearchTableResultjsxjsx";
import axios from "axios";





function Search() {

    return (
        <div>
            <h1>Search for Articles</h1>

            <h1>Latests News Articles</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Title</th><th>Source</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th><i className="fa regular fa-heart"></i></th> 
                        
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
          
 

  </div>

        
    );
}

export default Search;