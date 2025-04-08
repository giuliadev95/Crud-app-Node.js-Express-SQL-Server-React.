import React, {useEffect} from "react";
import '../styles/App.css';

const AddContact = ()=> {
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

            // create a class  with an instance that wrapps all input's values before sending them to the fetching-api
            class New_contact {
                constructor(nome, cognome, email) {
                    this.nome = nome,
                    this.cognome = cognome,
                    this.email = email
                }
            }
            // instance here
            const new_contact = new New_contact(contact_name, contact_surname, contact_email);
            console.log(new_contact);});       
        },
    []);

    return(
        <>
            <h1>Aggiungi nuovo contatto</h1>
            <form id="form">
                <input type='text' name='nome' placeholder='Nome' required id="nome"/>
                <input type='text' name='cognome' placeholder='Cognome' required id="cognome"/>
                <input type='text' name='email' placeholder='Email' required id="email"/>
                <button type="submit">Aggiungi</button>
            </form>
        </>
    )
}

export default AddContact;