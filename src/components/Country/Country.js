import React from 'react';
import "./Country.css"

const Country = (props) => {
    console.log(props.country)
    const {name,flags,region,population,area}=props.country
    return (
        <div className="country">
            <h2 style={{color:'green'}}>Country Name:{name}</h2>
            
           <img src={flags.png} alt="" />
           <h4>Capital Name:{props.country.capital}</h4>
           <h4>Region:{region}</h4>
           <h4>Population:{population}</h4>
           <h4>languages:{props.country.languages[0].name}</h4>
           <h4>Area:{area}</h4>
           
           {/*  <h1>Country Name:{props.country.name}</h1>
           <img src={props.country.flags.png} alt="" />
           <h4>Capital Name:{props.country.capital}</h4>
           <h4>Region:{props.country.region}</h4>
           <h4>Population:{props.country.population}</h4>
           <h4>languages:{props.country.languages[0].name}</h4>
           <h4>Area:{props.country.area}</h4> */}
        </div>
    );
};

export default Country;