import React, { useState, useEffect } from 'react';
import './App.css';
import Countries from './components/Countries';
import { countryManager } from './connection';

const App = () => {
  
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await countryManager.getAllCountries();
      setCountries(countries);
      
    };

    fetchCountries();
  }, []);

  const addCountry = async (country) => {
    //add the country
    const newCountry = await countryManager.setCountry(country);
    //update the state
    await setCountries([...countries, newCountry]);
  };

  const deleteCountryById = async (id) => {
    //delete the country
    await countryManager.deleteCountry(id);
    //update the state
    await setCountries(
      countries.filter((country) => {
        return country.id !== id;
      })
    );
  };
  
  const updateCountry = async (country) => {
    //update the country
    const updatedCountry = await countryManager.updateCountry(country);
    //update the state
    await setCountries(
      countries.map((country) => {
        if (country.id === updatedCountry.id) {
          return updatedCountry;
        }
        return country;
      })
    );
  };

  return (
    <div className="App">
      <Countries
        countries={countries}
        updateCountry={updateCountry}
        addCountry={addCountry}
        removeCountry={deleteCountryById}
      />
    </div>
  );
};

export default App;