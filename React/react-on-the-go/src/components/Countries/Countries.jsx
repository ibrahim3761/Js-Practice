import React, { use, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {

    const [visitedCountries,setVisitedCountries] = useState([])

    const[vistedFlags,setVisitedFlags] = useState([])

    const handleVisitedFlags = (flag) =>{
        const newVisitedFlags = [...vistedFlags,flag];
        setVisitedFlags(newVisitedFlags); 
    }

    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
        
    }
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h3>Traveled so far:{visitedCountries.length} </h3>
            <div className='visisted-flags-continer'>
                {
                    vistedFlags.map(flag => <img src={flag} alt="" />)
                }
            </div>
            <ol>
                {visitedCountries.map((country) => <li key={country.cca3}>{country.name.common}</li>)}
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;