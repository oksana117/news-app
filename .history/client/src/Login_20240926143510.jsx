

function Login() {

    return(
    <div className="row">
        <div className="offset-md-4 col-md-4">
            <h1 className id="font2">Please Login</h1>
            <form>
                <fieldset className="form-group">
                    <label htmlFor="email" className id="font2">Email: </label>
                    <input type="email" className="form-control"
                    name="email" placeholder="Enter Email Address"
                    id="email" required/>
                </fieldset>
                     <fieldset className="form-group">
                    <label htmlFor="password"  id="font2">Password: </label>
                    <input type="password" className="form-control"
                    name="password" placeholder="Enter password"
                    id="password" required/>
                </fieldset>

                <fieldset className="form-group text-right">
                    <button type="submit" className="btn btn-success"> Login </button>
                    
                </fieldset>
                <p className="text-center text-muted small pt-1">
                    
                    <a href="/login">Sign in</a>
                </p>

            </form>
        </div>
    </div>

);
}

export default Login;