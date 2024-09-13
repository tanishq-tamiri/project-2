import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav className="navbar">
            <h1>Blog App</h1>
            <div className="menu">
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/create'>Create Blog</Link>
            </div>
        </nav>
    );
} 

export default Navbar;