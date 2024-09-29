
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password} ) //to pass the data here
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/home')
                }
                
             })
            .catch(err => console.log(err))

    }

    return (

    <div className="row">
        <div className="offset-md-4 col-md-4">
            <h1 className id="font2">Please Login</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className="form-group">
                    <label htmlFor="email" className id="font2">Email: </label>
                    <input type="email" className="form-control"
                    name="email" placeholder="Enter Email Address"
                    id="email" onChange={(e) => SetEmail(e.target.value)} required/>
                </fieldset>
                     <fieldset className="form-group">
                    <label htmlFor="password"  id="font2">Password: </label>
                    <input type="password" className="form-control"
                    name="password" placeholder="Enter password"
                    id="password" onChange={(e) => SetPassword(e.target.value)} required/>
                </fieldset>

                <fieldset className="form-group text-right">
                    <button type="submit" className="btn btn-success"> Login </button>
                    
                </fieldset>
                <p className="text-center text-muted small pt-1">
                    Sing up here
                    <a href="/register">Sing up</a>
                </p>

            </form>
        </div>
    </div>

);
}

export default Login;