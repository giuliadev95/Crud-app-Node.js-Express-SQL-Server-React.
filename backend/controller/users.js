//import { v4 as uuidv4 } from 'uuid';
import { poolPromise } from '../config/db.js';

/*
let users = []

// GET ALL USERS AND FORMAT THE DATA AS A JSON ARRAY OF OBJECTS
export const getAllUsers = (req, res) => {
    res.send(users);

   // CREATE THE CLASS : "Utenti" 
    class Utenti {
        constructor(nome, cognome, email, id, codice){
           this.nome = nome;
           this.cognome = cognome;
           this.email = email;
           this.id = id;
           this.codice = codice;
        }
    }

    // CREATE AN INSTANCE OF THE CLASS "Utenti" CALLED : "utente_campione". STORE EACH OBJECT IN A "utente_campione" OBJECT
    users.forEach((user)=>{
        let utente_campione = new Utenti(user.nome, user.cognome, user.email, user.id, res.statusCode);
        for (const [key,value] of Object.entries(utente_campione)) {
            console.log(key, ":", value);
        } 
    });
}
*/

export const getAllUsers = async (req, res) => {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query("SELECT * FROM Contatti");
      res.status(200).json(result.recordset); // send the data
      console.log(result.recordset);
      result.recordset.forEach((dato)=>{
        const {Id, Nome, Cognome, Email} = dato;
        console.log ( Id, Nome, Cognome, Email)
      })
    } catch (err) {
        console.error(err);
        res.status(500).send("Errore nel recupero Contatti"); 
    }

  };

  // INSERT each New contact in the Azure sql db

// The code down below refers to usage with Postman

/* 
GET USER BY ID
export const getUserById = (req, res) =>{
    const {id} = req.params;
    const userTrovato = users.find((user)=> user.id == id);
    res.send(userTrovato);
}


// POST NEW USER
export const insertUser = (req, res)=> {
    const user = req.body;
    const userID = uuidv4();
    users.push( {...user, id: userID} );
    res.send("L'utente con email: " + (user.email) + " e con id:" + (userID) + "è stato aggiunto con successo.");    
}


// UPDATE USER BY ID
export const updateUser = (req, res)=>{
    const {id} = req.params
    const {nome, cognome, email} = req.body
   
    const userTrovato = users.find((user)=> user.id == id)
    if(nome) userTrovato.nome = nome;
    if(cognome) userTrovato.cognome = cognome;
    if (email) userTrovato.email = email;
    res.send(id + " modificato.")
}

export const deleteUser = (req, res)=>{
    const {id} = req.params
    users = users.filter((user)=> user.id != id)
    res.send('Utente con ID' + id + " è stato eliminato con successo.");
    console.log('Utente con ID' + id + " è stato eliminato con successo.");
}
*/
