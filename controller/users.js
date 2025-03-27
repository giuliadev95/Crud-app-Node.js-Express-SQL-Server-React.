import { v4 as uuidv4 } from 'uuid';

let users = []

// GET ALL USERS
export const getAllUsers = (req, res,next) => {
    res.send(users)   
   // Class Utenti: dati is an array that wraps the all users object
    class Utenti {
        constructor(dati){
            this.dati = users
            this.codice = res.statusCode
        }
    }
    // Istanza singolo_utente
    let utente_campione = new Utenti("dati");
    for (const [key,value] of Object.entries(utente_campione)) {
        console.log(key, ":", value);
    } 

    // var http_ok_code = 200;
    // if(res === http_ok_code){console.log("200")}else{console.log("Unknown code")}

}

// GET USER BY ID
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