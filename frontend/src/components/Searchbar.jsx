import { useState } from "react";
import TestFilter from "./TestFilter";


// CREATE A SEARCHBAR
const SearchBar = () => {
    {/** LOGIC TO PUT BEFORE
        1- usestate: import it, use it to set the input value

        2- const contacts = devi leggere i valori a schermo dei contatti

        3- use the handleChange to prevent the default refresh
        
        4 - make sure that there is a searchinput longer than nothing
            confront it with the strings stored in const contacts
            something like this: [snippet]
            if (searchInput.length > 0) {
                countries.filter((country) => {
                return country.name.match(searchInput);
            });
        }

        HTML CONTENT TO RENDER AFTER
        return <></>     
        
        const [input, setInput] = useState("");
        
        const contacts = [
            
    ]
    const getContact = async (req, res)=> {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query(`SELECT * FROM Contatti WHERE Nome = "Edoardo" `); // expected output = row with data of marta
            // res.status(200).json(result.recordset);
            console.log(result.recordset);
            res.send(`This is the correct output : ${recordset}`);
        }
        catch(err) {
            console.log(`There was an error: ${err}`);
            res.status(500).send(`There was an error while retrieving the Contact's name`);
        }
    }
    
    return (
        <>
            
        </>
    )
    */}   
    return(
        <>
            <TestFilter/>
        </>
    )
}

export default SearchBar;