//import { v4 as uuidv4 } from 'uuid';
import { poolPromise } from '../config/db.js';

// GET METHOD : get() from localhost:5000/api
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
}


// POST METHOD: post() to localhost:5000/api/new
export const postNew = async (req, res) => {
    const new_contact = req.body;

    if(!new_contact) {
        return res.send({
            error: `A field or more are missing:
                Nome, Cognome, Email`
        });
    }
    try{ const {Nome, Cognome, Email } = new_contact;
    console.log(new_contact, 'is type of', new_contact )

    

        const pool = await poolPromise;
        const query = `
            INSERT INTO Contatti (Nome, Cognome, Email)
            VALUES (@Nome, @Cognome, @Email)
        `;
        await pool.request()
            .input('Nome', Nome)
            .input('Cognome', Cognome)
            .input('Email', Email)
            .query(query);

        res.status(201).send({message: 'Contact added successfully.'});  
    }
    catch(err){
        console.error('Error inserting contact:', err);
        res.status(500).send({ error: 'Failed to add contact to the database.' });
    }
};

// delete

// update