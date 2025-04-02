import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/contatti'>Contatti</Link>
            </nav>
        </>
    )
}

export default Navbar;