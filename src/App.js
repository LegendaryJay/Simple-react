import React, { useState, useEffect } from 'react';
import './App.css';
import Countries from './components/Countries';
import { getAllCountries, setCountry, deleteCountry } from './connection';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  const addCountry = async (name) => {
    const newCountry = {
      name: name,
goldMedalCount: 0,
      silverMedalCount: 0,
      bronzeMedalCount: 0,
    };
    const { data } = await setCountry(newCountry);
    setCountries([...countries, data]);
  };

  const changeMedal = (index, delta, medal) => {
    console.log(index, delta, medal);
    setCountries(countries.map((cou) => {
      if (cou.id === index) {
        console.log(cou);
        switch (medal) {
          case 0:
            cou.bronzeMedalCount = Math.max(cou.bronzeMedalCount + delta, 0);
            break;
          case 1:
            cou.silverMedalCount = Math.max(cou.silverMedalCount + delta, 0);
            break;
          case 2:
            cou.goldMedalCount = Math.max(cou.goldMedalCount + delta, 0);
            break;
          default:
            break;
        }
      }
      return cou;
    }));
  };

  const deleteCountryById = async (id) => {
    await deleteCountry(id);
    setCountries(countries.filter((cou) => cou.id !== id));
  };

  return (
    <div className="App">
      <Countries
        countries={countries}
        changeMedal={changeMedal}
        addCountry={addCountry}
        deleteCountryById={deleteCountryById}
      />
    </div>
  );
};

export default App;