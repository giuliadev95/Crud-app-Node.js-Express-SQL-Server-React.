import { useState, useEffect } from "react";
// import './App.css';
import '../styles/App.css'

const Fetch = () => {
    const [ contacts, setContacts ] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/users/')
        .then( (res)=> {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setContacts(data);
            console.log(typeof data);
        });
    },[]);

    return (
        <div>
            {contacts.map((contact) => (  
                <ul>
                    <li key={contact.Id}> Id : {contact.Id}</li>
                    <li key={contact.Nome}>Nome : {contact.Nome}</li>
                    <li key={contact.Cognome}>Cognome : {contact.Cognome}</li>
                    <li key={contact.Email}>E-mail: {contact.Email}</li>
                </ul>
            ))}
        </div>
    );
};

export default Fetch;