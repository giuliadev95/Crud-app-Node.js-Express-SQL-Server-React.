import React from "react";
import '../styles/App.css';

const AddContact = ()=> {
    // Create the class
    class nuovoContatto {
        constructor(nome, cognome, email) {
            this.nome = nome;
            this.cognome = cognome;
            this.email = email;
        }
    }
    return(
        <>
            <h1>Aggiungi nuovo contatto</h1>
            <form id="form">
                <input type='text' name='nome' placeholder='Nome'/>
                <input type='text' name='cognome' placeholder='Cognome'/>
                <input type='text' name='email' placeholder='Email'/>
                <button type="submit">Aggiungi</button>
            </form>
            {/**
             * Nome
             * Cognome
             * Email
             * ARRAY OF OBJECTS
             * CLASS NEW CONTACT
                * ={
                    * Nome: '',
                    * Cognome: '',
                    * Email: ''
            * }
            * POST => METHOD()
            * post newContact.nome = as value of Nome in the DB
            * post newContact.cognome = as value of Cognome in the DB
            * post newContact.email = as value of Email in the DB
             * 
             * 
             * 1- THE CLIENT GETS FROM THE FRONTEND THE VALUES OF EACH PROPERTY'S KEY AND SENDS IT TO AN ENDPOINT :
             * /nuovo-contatto-api
             * 2- THE SERVER LISTENS TO THIS DATA AND FETCHES IT, TO SEND THEM IN THE AZURE DB
             * 
             * 
             * 
             * 
             * 3- THE SERVER CAN NOW GET THE UPDATED SET OF DATA FROM THE DB WHEN /contatti page is refresh or visited
             * 
             */}
        </>
    )
}

export default AddContact;