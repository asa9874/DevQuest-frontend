import { Outlet } from "react-router-dom";

function Body() {
    return (
        <div className="h-screen">
            <Outlet />
        </div>
    )
}

export default Body;