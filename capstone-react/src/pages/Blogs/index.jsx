import { Outlet } from "react-router-dom"

const Blogs = (props) => {
    return(
        <>
            <h1 className="mt-5">Blogs</h1>

            <Outlet />
        </>
    )
}

export default Blogs;