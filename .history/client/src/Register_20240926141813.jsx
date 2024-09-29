
import { useState } from "react";


function Register() {
    <div class="row">
        <div class="offset-md-4 col-md-4">
            <h1 class id="font2">Please Register</h1>
            <form method="POST" autocomplete="off">
                <fieldset class="form-group">
                    <label for="username" class id="font2">Username: </label>
                    <input type="text" class="form-control"
                    name="username" placeholder="Enter username"
                    id="username" required autofocus/>
                </fieldset>

                <fieldset class="form-group">
                    <label for="password" class id="font2">Password: </label>
                    <input type="password" class="form-control"
                    name="password" placeholder="Enter password"
                    id="password" required/>
                </fieldset>

                <fieldset class="form-group">
                    <label for="email" class id="font2">Email: </label>
                    <input type="email" className="form-control"
                    name="email" placeholder="Enter Email Address"
                    id="email" required/>
                </fieldset>


                <fieldset className="form-group text-right">
                    <input type="submit" className="btn btn-success" value="Register"/>
                    
                </fieldset>

            </form>
        </div>
    </div>




}