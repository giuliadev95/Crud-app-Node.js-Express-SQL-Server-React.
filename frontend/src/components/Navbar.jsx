import { Link } from "react-router-dom";
import searchBar from "./Searchbar";

function Navbar() {
    return(
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/contatti'>Contatti</Link>
                <Link to='/nuovo-contatto'>Nuovo</Link>
                <searchBar/>
                
            </nav>
        </>
    )
}

export default Navbar;