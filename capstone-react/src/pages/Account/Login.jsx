import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Login() {
    // console.log(localStorage.getItem('loggedIn'));
    // states
    const [passwordShown, setPasswordShown] = useState(false);
    const [failedAttempt, setFailedAttempt] = useState();

    const showPass = () => {
        setPasswordShown(passwordShown ? false : true);
    }
    //use history to redirect
    let navigateTo = useNavigate();

    const submitFunction = async (e) => {
        e.preventDefault();
        // get a server method to send the data to the server then use session info to show user their info once redirected
        let userBody = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        try {
            const response = await axios.post('http://localhost:8888/findUser', userBody);
            // console.log('Found', response.data);
            console.log(response.data);
            if (response.data) {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem('userId', response.data[0].id);
                localStorage.setItem('userName', response.data[0].name);
                localStorage.setItem('userEmail', response.data[0].email);
                localStorage.setItem('userPassword', response.data[0].password);
                navigateTo('/accounts/details');
            } else {
                setFailedAttempt(true);
            }
        } catch (err) {
            console.error("Error", err);
        };
        
    }

    return(
        <div className="row my-3">
            <div className="col"></div>
            <div className="col-6 text-start">
                <h1 className="my-3">Login</h1>
                <form onSubmit={submitFunction}>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="email">Email: </label>
                            <span> </span>
                            <input type="email" id="email" name="email" />
                        </h3>
                    </div>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="password">Password: </label>
                            <span> </span>
                            <input type={passwordShown ? "text" : "password"} id="password" name="password" />
                            
                        </h3>
                        <div className="row">
                            {failedAttempt ? <small className="rounded bg-danger-subtle text-danger my-2">Incorrect Email or Password</small> : ""}
                        </div>
                        <small>
                            <button type="button" className="btn btn-light shadow-none" onClick={showPass}> Show Password</button>
                        </small>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <div className="col">
                            <Link to='/accounts/register'>
                                <button type="button" className="btn btn-secondary">Register</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col"></div>
        </div>
    )
}