import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

function Navbar() {
    return(
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/contatti'>Contatti</Link>
                <Link to='/nuovo-contatto'>Nuovo</Link>
                <SearchBar/>
                
            </nav>
        </>
    )
}

export default Navbar;