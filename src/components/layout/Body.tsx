import { Outlet } from "react-router-dom";

function Body() {
    return (
        <div className="min-h-screen">
            <Outlet />
        </div>
    )
}

export default Body;