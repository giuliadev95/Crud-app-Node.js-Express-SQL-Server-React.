# What's in this file
This is the Codegrind italian course : Creare API con Nodejs + Express

## Important queries
```javaScript
    // remember to add the import for the persone.js file in the
    // file you're calling it. Like this:
        // import json persone
        import  {persone } from './persone.js';

    // Then, here's the code of the file
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

```
