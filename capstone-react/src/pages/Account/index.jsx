import { Outlet } from "react-router-dom"

const Accounts = (props) => {
    // get data from db and pass down props to set new user's id's
    return(
        <>
            <Outlet props={props.props} />
        </>
    )
}

export default Accounts;