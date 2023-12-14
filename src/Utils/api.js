// Requête Fetch //
import { useEffect, useState } from "react";

export function Logements () {
    const [logements, setLogements]= useState([]);
    const [Error, setError] = useState(null);

useEffect (() => {
 fetch('./logements.json')
    .then (response => {
        if (!response.ok) {
            throw new Error ('Erreur')
        }
        return response.json();
    })
    .then(result => {
        setLogements(result);
    })
    .catch(error => {
        setError(error.message);
    });
    
},[]);


return logements;

};



  