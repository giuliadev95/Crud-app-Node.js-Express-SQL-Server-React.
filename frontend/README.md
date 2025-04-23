# Filtering function frontend after fetch 16/04/25
- This is the copy paste of the functions and returned components I implemented till the modifications of thursday 17/04/25:

``` javascript

import { useState, useEffect } from "react";

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
                placeholder='Cerca' 
                id="searchBar" 
                value = {input}
                onChange = {(e) => setInput(e.target.value)}
        />   
        <table>
            <thead>
                <tr>
                    <th scope="col"> Nome </th>
                    <th scope="col"> Cognome </th>
                    <th scope="col"> Email </th>
                </tr>
            </thead>

            <tbody>
                {filteredContacts.length > 0 ? (
                    filteredContacts.map((contact) => (  
                        <tr key={contact.Id}>
                            <th scope="row"> {contact.Nome}</th>
                            <td>{contact.Cognome}</td>
                            <td>{contact.Email}</td>
                        </tr>
                    ))
                ) : (
                    <p>Nessun risultato</p>
                )}
            </tbody>
        </table>
        </>
    );
};

export default Fetch;

/**
 *   <table>
 *      <thead>
 *          <tr>
 *              <th scope="col"> Nome </th>
 *              <th scope="col"> Cognome </th>
 *              <th scope="col"> Email </th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <th key = contact.Id > contact.map() => contact.Nome </th>
 *          <td> contact.=> contact.Cognome </td>
 *          <td> contact.=> contact.Email </td>   
        </tbody>
    </table>
 * 
 */
```

# Instructions for further modifications from 17/04/2025 on

- filter contacts :
- send a query to the db to select * from Contatti
    where ${input} LIKE Nome, Cognome, Email.
    - trim spaces
    - add security: db purify etc (check if zod could be of any use)

# Add the delete user
