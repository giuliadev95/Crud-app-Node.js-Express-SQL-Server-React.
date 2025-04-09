import { useState, useEffect } from "react";
import '../styles/App.css'

const Fetch = () => {
    const [ contacts, setContacts ] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/api/')
        .then( (res)=> {
            return res.json();
        })
        .then((data) => {
            setContacts(data);
            console.log(data);
            console.log(typeof data);
        });
    },[]);

    return (
        <div>
            {contacts.map((contact) => (  
                <ul key={contact.Id}>
                    <li> Id : {contact.Id}</li>
                    <li>Nome : {contact.Nome}</li>
                    <li>Cognome : {contact.Cognome}</li>
                    <li>E-mail: {contact.Email}</li>
                </ul>
            ))}
        </div>
    );
};

export default Fetch;