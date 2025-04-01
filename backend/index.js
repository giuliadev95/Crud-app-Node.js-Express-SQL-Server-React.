import express from "express"
import usersRoutes from "./routes/users.js"
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url'

const app = express(); // funzionalità di express agganciate alla costante app
const PORT = "5000";
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Everything goes on localhost:5000/users
app.use('/users', usersRoutes);

// homepage
app.get('/', (req, res)=> {
    res.sendFile('homepage.html', { 
        root:__dirname + "/public"
    });
});

// contatti page
app.get( '/contatti', (req, res)=> {
    res.sendFile('contatti.html', {
        root:__dirname + "/public"
    });
});

// Error page
app.get('*', (req, res)=>{
    res.sendFile('404.html', {
        root:__dirname + "/public"
    });
});

// Server listen at port 5000
app.listen(PORT, ()=> {
    console.log('I\'m listening');   
});

        