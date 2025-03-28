import express from "express"
import usersRoutes from "./routes/users.js"

// L'import funzione perchè attribuisce un nome 
// arbitrario all'oggetto router, leggendo l'ultima riga di users.js:
// export default router, che è => const router = expressmRouter(),
// quindi un metodo express

const app = express(); // funzionalità di express agganciate alla costante app
const PORT = "5000";

// middleware per formattare in json il req.body del console.log
// in Terminale
app.use(express.json());

// chiamata get alla home localhost:5000
app.get('/', (req, res)=> res.send("Benvenuto nella homepage"));

// chiamata get alla users page :5000/users
app.use('/users', usersRoutes);


app.listen(PORT, ()=> {
    console.log('I\'m listening');   
});




