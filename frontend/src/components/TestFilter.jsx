
function TestFilter(){

    // This is a working function: it listens to
    // the change of the input value 
    // and logs 'Hi' in the Console.
    // NEXT STEP: compare the value with the db record
        function functionSearch(){
            console.log('Hi')
        }
 
    return (
        <>
            <input type='text' placeholder='Search' id="searchBar" onChange={functionSearch} ></input>
        </>
    )
}

export default TestFilter;