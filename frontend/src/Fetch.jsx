import { useState, useEffect } from "react";
import './App.css';

const Fetch = () => {
    const [ contacts, setContacts ] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/users')
        .then( (res)=> {
            return res.json();
        })
        .then((data) => {
            console.log(data[0]);
            setContacts(data);
            console.log(typeof data[0]);
        });
    },[]);

    return (
        <div>
            {contacts.map((contact) => (  
                <ul key={contact.id}>
                    <li>Nome : {contact.nome}</li>
                    <li>Cognome :{contact.cognome}</li>
                    <li>E-mail: {contact.email}</li>
                    <li>ID: {contact.id}</li>
                </ul>
            ))}
        </div>
    );
};

export default Fetch;