import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"

const Admin = (props) => {
    const navigateTo = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("userId") !== "1") {
            navigateTo('/accounts/details');
        }
    })

    return (
        <>
            <Outlet props={props} />
        </>
    )
}

export default Admin;