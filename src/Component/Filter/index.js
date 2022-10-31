import React from "react";
import "./index.css"

const Filtersort = (filter,filt,setFilt,animes) => {

    const functio = () => {
        setFilt(1)
    }
    console.log(filt)
    return(
        <div className="filter-container">
            <button onClick={()=> setFilt(0)}>All</button>
            <button onClick={functio}>Sci</button>
            <button onClick={()=> setFilt(24)}>Horrer</button>
        </div>
    )
}

export default Filtersort;
