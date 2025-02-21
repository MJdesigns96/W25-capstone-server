import { Outlet } from "react-router-dom"

export default function Checkout(props) {
    return(
        <>
            <Outlet props={props.props} />
        </>
    )
}