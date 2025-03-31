import express from "express"
import usersRoutes from "./routes/users.js"
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
// import json persone
import  {persone } from './persone.js';

const app = express(); // funzionalità di express agganciate alla costante app
const PORT = "5000";
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// '/homepage.html'
app.get('/', (req, res)=> {
    res.sendFile('homepage.html', { 
        root:__dirname + "/public"
    })
});

app.get( '/contatti', (req, res)=> {
    res.sendFile('contatti.html', {
        root:__dirname + "/public"
    })
});
app.use('/users', usersRoutes);


 '/persone'
app.get('/persone', (req, res) =>{
    const nuovePersone = persone.map((persona)=>{
        const { nome, cognome, indirizzo} = persona
        return {nome, cognome, indirizzo}
    })
    res.json(nuovePersone);
});


app.get('/persone/:id', (req, res) => {
    console.log(req.params);
    const {id} = req.params;
    const persona = persone.find((persona) => persona.id === Number(id));
    
    if(!persona) {
        return res.send('Contatto non trovato');
    }
    res.json(persona);
});

app.get('/contatti/search', (req,res)=>{
    console.log(req.query);
    res.send('ciao')
})


app.get('*', (req, res)=>{
    res.sendFile('404.html', {
        root:__dirname + "/public"
    });


});
app.listen(PORT, ()=> {
    console.log('I\'m listening');   
});

        