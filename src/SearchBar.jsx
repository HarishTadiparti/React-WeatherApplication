import { useState } from "react";


function SearchBar({city}){

    let [value, setValue] = useState("")

    let handleInputChange = (event) =>{
        setValue(event.target.value);
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        city(value)
        setValue("")
    }
    return(
        <form className="searchBar" onSubmit={handleSubmit}>
            <input type="text" placeholder='Search for a city' value={value} onChange={handleInputChange} />
            <button type='submit' ><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}

export default SearchBar