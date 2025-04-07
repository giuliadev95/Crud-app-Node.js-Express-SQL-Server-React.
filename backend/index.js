import express from "express";
import usersRoutes from "./routes/users.js";
import cors from 'cors';
// import path from 'path';
import { fileURLToPath } from 'url';

const app = express(); // funzionalità di express agganciate alla costante app
const PORT = "5000";
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file

app.get('/', (req,res)=>{
    res.status(200).send({corpus:'This is the / directory'});
});

// api page
app.use('/api', usersRoutes); // = Every time in routes/users.js I
// invoke the router. class, I'm actually requesting a response 
// from: " http://localhost:5000/api/ + costum paths..."
// This is important as it sets the different between the
// app.get() method that listens on port http://localhost.5000/,
// and the router.get() method that listens on port http://localhost:5000/api/

// Error page
app.get('/*', (req, res)=>{
    res.send('404: The page doesn\'t exist');
});

// Server listen at port 5000
app.listen(PORT, ()=> {
    console.log(`Server listening at http://localhost:${PORT}`);   
});


        