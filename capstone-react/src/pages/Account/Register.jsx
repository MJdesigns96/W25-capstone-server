import { useState } from "react"
import { useNavigate, Link  } from "react-router-dom"
import axios from 'axios';

export default function Register(props) {
    // get the length of the list of users to add the new user's id
    let usersListLength = props.props[props.props.length-1].id + 1;

    // a template object to save the form data to before sending it to the db
    let templateObj = {
        id: usersListLength + 1,
        name: "",
        email: "",
        password: ""
    };

    // states
    const [passwordShown, setPasswordShown] = useState(false);
    const [formData, setFormData] = useState(templateObj);

    //password toggle fxn
    const showPass = () => {
        setPasswordShown(passwordShown ? false : true);
    }
    //use history to redirect
    let navigateTo = useNavigate();

    //handle the change in form data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name] : value});
    };

    //once submitted use axios and server method to add the form to mongodb
    const submitFunction = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8888/registerUser', formData);
            console.log('Form data submitted', response.data);
            navigateTo('/accounts/login');
        } catch (err) {
            console.error("Error", err);
        };
    }

    return(
        <div className="row my-3">
            <div className="col"></div>
            <div className="col-6 text-start">
                <h1 className="my-3">Register</h1>
                <form action="post" onSubmit={submitFunction}>
                    <input type="hidden" id="id" name="id" value={formData.id} />
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="name">Name: </label>
                            <span> </span>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                        </h3>
                    </div>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="email">Email: </label>
                            <span> </span>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                        </h3>
                    </div>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="password">Password: </label>
                            <span> </span>
                            <input type={passwordShown ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleChange} />
                        </h3>
                        <small>
                            <button type="button" className="btn btn-light shadow-none" onClick={showPass}> Show Password</button>
                        </small>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <div className="col">
                            <Link to='/accounts/login'>
                                <button type="button" className="btn btn-secondary">Login</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col"></div>
        </div>
    )
}