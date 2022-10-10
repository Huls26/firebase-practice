import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="nav-container">
            <Link to={"/"}><h3 className="nav-home">Home</h3></Link>
            <Link to={"add/delete"}><h3 className="nav-add/delete">Add/Delete</h3></Link>
        </nav>
    )
}