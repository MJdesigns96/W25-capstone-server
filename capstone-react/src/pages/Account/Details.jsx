import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom";

export default function Details() {
    let items = {...localStorage};
    console.log(items);
    // temporary data
    const tempAccount = {
        id: localStorage.getItem('userId'),
        name: localStorage.getItem('userName'),
        email:localStorage.getItem('userEmail'),
        password: localStorage.getItem('userPassword'),
        shipping: "",
        postal: ""
    };

    //redirect to register if not signed in through local storage
    let logStatus = localStorage.getItem('loggedIn');
    let booleanValue = logStatus === "true";
    let navigateTo = useNavigate();

    //check for admin access
    let adminCheck = localStorage.getItem('userId');

    useEffect(() => {
        if (!booleanValue) {
                navigateTo('/accounts/login');
            }
    }, [])
    
    // states
    const [passwordShown, setPasswordShown] = useState(false);
    const [accountDetails, setAccountDetails] = useState(tempAccount);
    

    const showPass = () => {
        setPasswordShown(passwordShown ? false : true);
    }

    // console.log(accountDetails);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAccountDetails(values => ({...values, [name]:value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // send the data below to the server to update the db; the data is already formatted in the state object
        console.log(e.target.userId.value);
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }

    const logOut = () => {
        localStorage.setItem("userId", "");
        localStorage.setItem("userName", "");
        localStorage.setItem("userEmail", "");
        localStorage.setItem("userPassword", "");
        localStorage.setItem("loggedIn", false);
        navigateTo('/accounts/login');
    }

    const dashboardButton = (
        <div className="col-2">
            <Link to={`/admin/dashboard`}>
                <button type="button" className="btn btn-secondary">Admin</button>
            </Link>
        </div>
    )

    return(
        <>
            <div className="row mt-5 ms-5">
                { adminCheck === "1" ? dashboardButton : ""}                    
            </div>
            <div className="row mb-5">
                <div className="col"></div>
                <div className="col-6 text-start">
                    
                    <div className="row my-3">
                        <h2>Hi, {accountDetails.name}</h2>
                        <p>Welcome to your account details.</p>
                    </div>
                    <h4>My Details:</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name="userId" id="userId" value={accountDetails.id} />
                        <div className="row my-2">
                            <h3>
                                <label htmlFor="name">Name: </label>
                                <span> </span>
                                <input type="text" id="name" name="name" value={accountDetails.name} onChange={handleChange}/>
                            </h3>
                        </div>
                        <div className="row my-2">
                            <h3>
                                <label htmlFor="email">Email: </label>
                                <span> </span>
                                <input type="text" id="email" name="email" value={accountDetails.email} onChange={handleChange}/>
                            </h3>
                        </div>
                        <div className="row my-2">
                            <h3>
                                <label htmlFor="password">Password: </label>
                                <span> </span>
                                <input type={passwordShown ? "text" : "password"} id="password" name="password" value={accountDetails.password} onChange={handleChange}/>
                            </h3>
                            <small>
                                <button type="button" className="btn btn-light shadow-none" onClick={showPass}> Show Password</button>
                            </small>
                        </div>
                        <div className="row my-2">
                            <h3>
                                <label htmlFor="email">Address: </label>
                                <span> </span>
                                <input type="text" id="shipping" name="shipping" value={accountDetails.shipping} onChange={handleChange}/>
                            </h3>
                        </div>
                        <div className="row my-2">
                            <h3>
                                <label htmlFor="email">Postal Code: </label>
                                <span> </span>
                                <input type="text" id="postal" name="postal" value={accountDetails.postal} onChange={handleChange}/>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-danger" onClick={logOut}>Log Out</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </>
        
    )
}