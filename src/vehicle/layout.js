import { Outlet, Link } from "react-router-dom";
import './layout.css'

function Layout() {


    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/form">Form</Link></li>
                <li> <Link to="/page1">Page</Link></li>
                <li> <Link to="/todo">To Do</Link></li>
                <li> <Link to="/col">Color</Link></li>
                <li> <Link to="/c1">C-1</Link></li>
                <li> <Link to="/c2">C-2</Link></li>
                <li> <Link to="/forms">Forms</Link></li>
            </ul>

            <Outlet />
            
        </>
    )
}

export default Layout;