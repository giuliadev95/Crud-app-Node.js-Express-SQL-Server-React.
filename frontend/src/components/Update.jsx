import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    //  ---- [0] const declaration ----
    // Destructure the url array and extract the last value after / , then incapsulate it in a variable { } as the "id"
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [contact, setContact] = useState({})
    const [newName, setNewname] = useState("");
    const [newSurname, setNewSurname] = useState("");
    const [newEmail, setNewEmail] = useState("");
   
    // ---- [2] fetch single contact's data right after the DOM has mounted ----
    useEffect(() => {   
        axios
        .get(`http://localhost:5000/api/${id}`)
        .then ( (response) => {
            // logs an Array of 1 Object
            console.log(response.data[0]); 
            // response data is now passed into the contact variable
            setContact(response.data[0]);
            // logs the first and unique Object of the response.data Array
            //console.log(contact); => not logging anithing but a void object
        })
        .catch(error => console.log(`Error fetching the contact's data: ${error}`));
    }, [id]) 
    // Up here [id] is for re-rendering the component once the id is fetched
    
    // ---- [3] Console.log the re-rendered contact state ----
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


    // SAME EXACT LOGIC,FROM AddContact.jsx
    // form on submit
      useEffect(()=>{
        // take the form and each form's input by id
        const form = document.getElementById('form');
        const inputName = document.getElementById('new-name');
        const inputSurname = document.getElementById('new-surname');
        const inputEmail = document.getElementById('new-email');
            
            // prevent default refresh when submit-button is clicked
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                
                // take the inputs' values by id
                const contact_name = inputName.value;
                const contact_surname = inputSurname.value;
                const contact_email = inputEmail.value;
                
                // Debugging: console.log() the values to ensure they've been taken
                console.log(`Nome: ${contact_name}, type ${typeof contact_name}`);
                console.log(`Cognome: ${contact_surname}, type ${typeof contact_surname}`);
                console.log(`Email: ${contact_email}, type ${typeof contact_email}`);
    
                // create a class  with an instance that wrapps all input's values before sending them to the post-fetching-api
                class Updated_contact {
                    constructor(Nome, Cognome, Email) {
                        this.Nome = Nome,
                        this.Cognome = Cognome,
                        this.Email = Email
                    }
                }
                // instance here
                const new_contact = new Updated_contact(contact_name, contact_surname, contact_email);
                console.log(new_contact); 
                fetch(`http://localhost:5000/api/${id}`, { 
                    method: 'PUT',
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(new_contact)
                })
                console.log(new_contact) // Is logging
                const {Nome, Cognome, Email } = new_contact;
                console.log(new_contact, 'is type of', typeof new_contact, 'and has: ', Nome, Cognome, Email)
                // Debugging
                for(let dato in new_contact){
                    console.log(dato, 'is type of ', typeof dato)
                };
                for (const [key, value] of Object.entries(new_contact)) {
                    console.log(`${key}: ${value}`);
                };
                navigate("/contatti");   
             
            });  
    
            },
        []);


    //  ----- [1] the HTML body mounts first -----
    return ( 
        <> 
            <h1>Modifica contatto</h1>
            <form 
                id='form'
               //  onSubmit={handleUpdate}
                >
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
                <button 
                    type='submit'   
                >
                Salva
                </button>
            </form>
        </>
    )
}
export default Update;