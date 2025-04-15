import { useState, useEffect } from "react";
import '../styles/App.css'

const Fetch = () => {
    const [ contacts, setContacts ] = useState([]);

    // 1) first code moved here:
      // UseState to handle changed input value
      const [input, setInput] = useState("");
      console.log(input);

    // 2) second code moved here:
    // Fetch fake json data from json placeholder and filter them comparing them to the real input value
    const fetchData = (value) => (
        fetch("http://localhost:5000/api/")
        .then ( (response) => response.json() )
        .then ( (json) => {    
            const result = json.filter( (contact) => {
                return contact && contact.Nome && contact.Nome.toLowerCase().includes(value);          
            }); 
            console.log(result); })
    );

    // 3) third snippet of code moved here:
    // Declare thr function "handleChange() to perform the 2 functions written above"
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }


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
        <>
                <input 
                        type='text' 
                        placeholder='Search' 
                        id="searchBar" 
                        //</>onChange={functionSearch}
                        onChange ={ (e)=> {
                            handleChange(e.target.value)
                        }}
                    />       
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
        </>
    );
};

export default Fetch;
