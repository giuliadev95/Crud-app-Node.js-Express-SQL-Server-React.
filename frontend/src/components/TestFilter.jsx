import { useState,  } from "react";

function TestFilter(){    
    // UseState to handle changed input value
    const [input, setInput] = useState("");
    console.log(input);

    // Fetch fake json data from json placeholder and filter them comparing them to the real input value
    const fetchData = (value) => (
        fetch("http://localhost:5000/api/")
        .then ( (response) => response.json() )
        .then ( (json) => {    
            const result = json.filter( (contact) => {
                return contact && contact.Nome && contact.Nome.toLowerCase().includes(value);          
            }); 
            console.log(result); })
    );

    // Declare thr function "handleChange() to perform the 2 functions written above"
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <>
            <input 
                type='text' 
                placeholder='Search' 
                id="searchBar" 
                //</>onChange={functionSearch}
                onChange ={ (e)=> {
                    handleChange(e.target.value)
                }}
            />         
        </>
    )
}

export default TestFilter;