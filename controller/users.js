import { v4 as uuidv4 } from 'uuid';

let users = []

// GET ALL USERS
export const getAllUsers = (req, res) => {
    res.send(users)   
   // Class : Utenti
    class Utenti {
        constructor(nome, cognome, email, id, codice){
           //this.dati = {"Dati dell'utente": users, "codice": res.statusCode}
           this.nome = nome;
           this.cognome = cognome;
           this.email = email;
           this.id = id;
           this.codice = codice;
            //this.codice = res.statusCode // print the status code as well as a *property* of this Class
        }
    }
    // Istanc : singolo_utente
    users.forEach((user)=>{

        let utente_campione = new Utenti(user.nome, user.cognome, user.email, user.id, res.statusCode);
        for (const [key,value] of Object.entries(utente_campione)) {
            console.log(key, ":", value);
            /* Output:

            1) OLD OUTPUT BEFORE LAST COMMIT
                dati : [
                    {
                        nome: 'Alex',
                        cognome: 'Bartolini',
                        email: 'alexbartolini@gmail.com'
                        id: 'xxxxx'
                        }
                        ]
                        codice : 200

                2) NEW OUTPUT AFTER LAST COMMIT
                {
                    nome : "Alex",
                    cognome : "Bartolini",
                    email: "email",
                    id: "string_id",
                    codice : 200 (number: int data type)
                }         
            */
        } 
    })
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