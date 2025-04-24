import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    // destructure the url array and extract the last value after / ,
    // then incapsulate it in a variable { } as the "id"
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [contact, setContact] = useState({})
    const [newName, setNewname] = useState("");
    const [newSurname, setNewSurname] = useState("");
    const [newEmail, setNewEmail] = useState("");

    // [2] fetch single contact's data right after the DOM has mounted
    useEffect(() => {   
        axios
        .get(`http://localhost:5000/api/${id}`)
        .then ( (response) => {
            // logs an Array of 1 Object
           // console.log(response.data[0]); 
            setContact(response.data[0]);
            // logs the first and unique Object of the response.data Array
           // console.log(contact);
        })
        .catch(error => console.log(`Error fetching the contact's data: ${error}`));
    }, [id]) 
    // Up here [id] is for re-rendering the component once the id is fetched
    
    // [3] Console.log the re-rendered contact state
    useEffect(() => {
        // create a class to wrap the contact found by id
        class ContactToUpdate {
            constructor(Id, Nome, Cognome, Email) {
                this.Id = Id
                this.Nome = Nome,
                this.Cognome = Cognome,
                this.Email = Email
            }
        }
        const contactToUpdate = new ContactToUpdate(contact.Id, contact.Nome, contact.Cognome, contact.Email);
       //console.log(contactToUpdate) only on a secondary re-rendering populated by real data from the backend endpoint
       if(contact && Object.keys(contact).length > 0) {
           console.log("Got contact:", contactToUpdate);}
    }, [contact]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios
        .put(`http://localhost:5000/api/${id}`, values)
        .then( response => {
            console.log(`Contact updated successfully: ${response.data}`);
            // Automatically redirect to the contacts table page "Contatti"
            navigate("/contatti"); 
        })
       // .catch(error => console.log(`There was an error updating the contact's data: ${error}`));
       .catch((error) => {
        setError("Failed to update contact. Please try again.");
        console.error(error);
    });
    }

    
    // [1] the HTML body mounts first
    return ( 
        <> 
            <h1>Modifica contatto</h1>
            <form onSubmit={handleUpdate}>
                <label htmlFor='new-name'>Nome</label>
                <input 
                    id='new-name' 
                    value = {newName}
                    onChange={e => setNewname(e.target.value)}
                />
                <label htmlFor='new-surname'>Cognome</label>
                <input 
                    id='new-surname' 
                    value={newSurname} 
                    onChange={e => setNewSurname(e.target.value)}
                />
                <label htmlFor='new-email'>Email</label>
                <input 
                    id='new-email' 
                    value={newEmail} 
                    onChange={e => setNewEmail(e.target.value)}
                />
                <button type='submit'>Salva</button>
            </form>
        </>
    )
}
export default Update;