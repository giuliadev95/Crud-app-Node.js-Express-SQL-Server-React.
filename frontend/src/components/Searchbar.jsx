import { useState } from "react";

// CREATE A SEARCHBAR
const searchBar = () => {
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
    */}   

    const [input, setInput] = useState("");

    const contacts = [
        
    ]
}

export default searchBar;