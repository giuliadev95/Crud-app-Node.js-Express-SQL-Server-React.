import { useState, useEffect } from "react";
import '../styles/App.css'

const Fetch = () => {
    const [ contacts, setContacts ] = useState([]); // Store all contacts fetched from the db with a get() 
    const [input, setInput] = useState(""); // Store the search input value and handle the input change
    // Fetch all contacts from the backend when the component mounts
    useEffect(()=> {
        fetch("http://localhost:5000/api/")
        .then ( (response) => response.json() )
        .then( (data) => {
            setContacts(data); // Store the fetched contacts here
            console.log(data);
       })
       .catch((err) => console.error(`There was an error fetching contacts: ${err}`));

    },[]);
    
    // Filter contacts based on the search input
    const filteredContacts = contacts.filter((contact) => {
        return (
            contact &&
            contact.Nome &&
            contact.Nome.toLowerCase().includes(input.toLowerCase())
        );
    });
    
    // RETURN:
    return (
        <>
        <input 
                type='text' 
                placeholder='Search' 
                id="searchBar" 
                value = {input}
                onChange = {(e) => setInput(e.target.value)}
        />       
        <div>
            {filteredContacts.length > 0 ? (
                filteredContacts.map((contact) => (  
                    <ul key={contact.Id}>
                        <li> Id : {contact.Id}</li>
                        <li>Nome : {contact.Nome}</li>
                        <li>Cognome : {contact.Cognome}</li>
                        <li>E-mail: {contact.Email}</li>
                    </ul>
                ))
            ) : (
                <p>Nessun risultato</p>
            )}
        </div>
        </>
    );
};

export default Fetch;
