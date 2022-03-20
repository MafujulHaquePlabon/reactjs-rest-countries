import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"
const styleColor={
    color:"darkgoldenrod"
}
const Countries = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h1 style={styleColor}>Hello from Countries:{countries.length}</h1>
           <div className="countries-div">
           {
                countries.map(country=><Country country={country} key={country.alpha3Code} ></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;