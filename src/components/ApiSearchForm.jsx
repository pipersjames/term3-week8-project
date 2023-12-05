// Form Component
// Grabs a pokemon anme from user input
// makes a fetch request on submit
// returns data

import { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiProvider";

export function ApiSearchForm() {
    let apiUrlBase = useContext(ApiContext)

    let [searchData, setSearchData] = useState('pickachu')

    const searchForPokemon = async () => {
        //console.log(`Api Url is: ${apiUrlBase}`)
        let response = await fetch(apiUrlBase + "pokemon/" + searchData)
    }
    return(
        <div>
            <h5>Enter a Pokemon name:</h5>
            <input type="text" 
                name="pokemonName" 
                id="pokemonName"
                value={searchData}
                onChange={event => setSearchData(event.target.value)} 
                />
            <button onClick={searchForPokemon}type="submit">Search</button>

        </div>
    )
}