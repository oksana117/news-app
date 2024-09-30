/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                if (result.data === "Success") {
                    localStorage.setItem('user', email);
                    //const storedUserId = localStorage.getItem('userId');
                    console.log("storedUserId");
                    setIsAuthenticated(true);
                    navigate('/home');
                } else {
                    alert(result.data);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="row">
            <div className="offset-md-4 col-md-4">
                <h1 id="font2">Please Login</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset className="form-group">
                        <label htmlFor="email" id="font2">Email: </label>
                        <input type="email" className="form-control"
                            name="email" placeholder="Enter Email Address"
                            id="email" onChange={(e) => setEmail(e.target.value)} required />
                    </fieldset>
                    <fieldset className="form-group">
                        <label htmlFor="password" id="font2">Password: </label>
                        <input type="password" className="form-control"
                            name="password" placeholder="Enter password"
                            id="password" onChange={(e) => setPassword(e.target.value)} required />
                    </fieldset>
                    <br />
                    <fieldset className="form-group text-right">
                        <button type="submit" className="btn btn-success"> Login </button>
                    </fieldset>
                    <p className="text-center text-muted small pt-1">
                        <a href="/register"> Sign up here </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
