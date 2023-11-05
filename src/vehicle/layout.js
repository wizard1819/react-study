import { Outlet, Link } from "react-router-dom";
import './layout.css'

function Layout() {


    return (
        <>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li> <Link to="/ford">Ford</Link></li>
            </ul>

            <Outlet />
            
        </>
    )
}

export default Layout;