import React, { useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import data from './assets/countries.json';

const App = () => {
  const [countries, setCountries] = useState(data);

  const addCountry = (name) => {
    let country = {
      name: name,
      gold: 0,
      silver: 0,
      bronze: 0,
      id: countries.length,
    };
    let newCountries = [...countries, country].sort((a, b) =>
      a.name > b.name ? 1 : -1
    ).map((country, i) => {
      country.id = i
      return country
    });
    setCountries(newCountries);
  };

  const changeMedal = (index, delta, medal) => {
    setCountries(countries.map((cou) => {
      if (cou.id === index) {
        switch (medal) {
          case 0:
            cou.bronze = Math.max(cou.bronze + delta, 0);
            break;
          case 1:
            cou.silver = Math.max(cou.silver + delta, 0);
            break;
          case 2:
            cou.gold = Math.max(cou.gold + delta, 0);
            break;
          default:
            break;
        }
      }
      return cou;
    }));
  };

  return (
    <div className="App">
      <Countries
        countries={countries}
        changeMedal={changeMedal}
        addCountry={addCountry}
      />
    </div>
  );
};

export default App;