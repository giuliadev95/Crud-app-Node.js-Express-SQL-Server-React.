import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const { id } = useParams(); // destructure the url array and extract the last value after / ,
                                // then incapsulate it in a variable { } as the "id"
    const [ values, setValues ] = useState({nome: "", cognome: "", email: ""});
    const navigate = useNavigate();

    useEffect(() => {   // [2] fetch single contact's data right after the DOM has mounted
        axios
        .get(`http://localhost:5000/api/${id}`) // adatta
        .then(response => {
            const contact = response.data[0];
            setValues({ 
                nome: contact.Nome,
                cognome: contact.Cognome,
                email: contact.Email
            })
        })
        .catch(error => console.log(`Error fetching the contact's data: ${error}`));
    }, [id])

    const handleUpdate = (event) => {
        event.preventDefault();
        axios
        .put(`http://localhost:5000/api/${id}`, values)
        .then( response => {
            console.log(`Contact updated successfully: ${response.data}`);
            navigate("/contatti"); // Automatically redirect to the contacts table page "Contatti"
        })
       // .catch(error => console.log(`There was an error updating the contact's data: ${error}`));
       .catch((error) => {
        setError("Failed to update contact. Please try again.");
        console.error(error);
    });
    }
    return ( // [1] the HTML body mounts first
        <> 
            <h1>Modifica contatto</h1>
            <form onSubmit={handleUpdate}>
                <label htmlFor='nome'>Nome</label>
                <input id='nome' 
                    value={values.nome} 
                    onChange={e => setValues({ ...values, nome: e.target.value})}/>

                <label htmlFor='cognome'>Cognome</label>
                <input id='cognome' 
                    value={values.cognome} 
                    onChange={e => setValues({ ...values, cognome: e.target.value})}/>

                <label htmlFor='email'>Email</label>
                <input id='email' 
                    value={values.email} 
                    onChange={e => setValues({ ...values, email: e.target.value})}/>
                <button type='submit'>Salva</button>
            </form>
        </>
    )
}
export default Update;