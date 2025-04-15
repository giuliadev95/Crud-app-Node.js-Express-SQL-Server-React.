import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/contatti'>Contatti</Link>
                <Link to='/nuovo-contatto'>Nuovo</Link>  
            </nav>
        </>
    )
}

export default Navbar;