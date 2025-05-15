import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/App.css';

const AddContact = ()=> {
    // use react routing to navigate to /contacts route
    const navigate = useNavigate();
    // Use thew useEffect to access DOM elements by id
    useEffect(()=>{
        // take the form and each form's input by id
        const form = document.getElementById('form');
        const inputName = document.getElementById('nome');
        const inputSurname = document.getElementById('cognome');
        const inputEmail = document.getElementById('email');
        
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
            class New_contact {
                constructor(Nome, Cognome, Email) {
                    this.Nome = Nome,
                    this.Cognome = Cognome,
                    this.Email = Email
                }
            }
            // instance here
            const new_contact = new New_contact(contact_name, contact_surname, contact_email);
            console.log(new_contact); 
            fetch('http://localhost:5000/api/', { 
                method: 'POST',
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
            } 
            // navigate back to " /contacts " route
            navigate("/contatti")
            fetch('http://localhost:5000/api/', { 
                method: 'GET',
                headers: { "Content-Type": "application/json"}
            })

        }); 

        },
    []);

    return(
        <>
            <h1>Aggiungi nuovo contatto</h1>
            <form id="form">
                <input type='text' name='nome' placeholder='Nome' required id="nome"/>
                <input type='text' name='cognome' placeholder='Cognome' required id="cognome"/>
                <input type='text' name='email' placeholder='Email' required id="email"/>
                <button type="submit" class='add'>Aggiungi</button>
            </form>
        </>
    )
}

export default AddContact;