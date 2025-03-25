import { v4 as uuidv4 } from 'uuid';

let users = [ ]

// GET ALL USERS
export const getAllUsers = (req, res) => {
    console.log(users);
    res.send(users);
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