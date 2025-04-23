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
            error: `The new_contact element is missing: nothing found to post in the database.`
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


// GET METHOD : GET USER BY ID
export const getUserById = async (req,res)=> {
    try {
        const id_string = (req.params);
        
        if(id_string) {
            console.log(id_string, 'has type of', typeof id_string); // id is an Object, need to iterate over it with Object.entries Key value
            for (const [key, value] of Object.entries(id_string)) {
                console.log(`${key}: ${value}`);} // Logging : id : 4
        } else {
                console.log('There\'s no id')
        }
        const id_number = parseInt(Object.values(id_string));
        console.log(id_number, 'has now type of "int".');
        const pool = await poolPromise;
        const result = await pool.request().query(`SELECT * FROM Contatti WHERE Id = ${id_number} `); // there was an error: RequestError: Must declare the scalar variable "@id_number`
        // res.status(200).json(result.recordset);
        console.log(result.recordset);
        /*   result.recordset : 
        [ 
            {
                Id: 72,
                Nome: 'Marco',
                Cognome: 'Rossi',
                Email: 'marco.rossi@virgilio.it'
            }
        ]
        */
        res.send(`The contact with ID = ${id_number} has been found successfully.`);
}
catch(err) {
    console.error(`There was an error: ${err}`);
    res.status(500).send(`There was an error while retrieving the contact by ID.`);
}
}

// delete

// DELETE METHOD: delete() to localhost:5000/api/:id
export const deleteUserById = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).send({ error: 'ID non fornito.' });
    }

    try {
        const pool = await poolPromise;
        const result = await pool
            .request()
            .input('Id', id)
            .query('DELETE FROM Contatti WHERE Id = @Id');

        if (result.rowsAffected[0] === 0) {
            return res.status(404).send({ message: `Nessun contatto con ID ${id} trovato.` });
        }

        res.send({ message: `Contatto con ID ${id} eliminato con successo.` });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Errore nell\'eliminazione del contatto.' });
    }
};


// update