// connect to API and get data
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://olympic-medal.azurewebsites.net',
});

// get all countries
export const getAllCountries = () => api.get('/API/country');
// get country by id
export const getCountryById = (id) => api.get(`/API/country/${id}`);
// set country
export const setCountry = (country) => api.post('/API/country', country);
// delete country
export const deleteCountry = (id) => api.delete(`/API/country/${id}`);
// update country
export const updateCountry = (id, country) => api.put(`/API/country/${id}`, country);
// search country
export const searchCountry = (name) => api.get(`/API/country/search/${name}`);
// patch country
export const patchCountry = (id, country) => api.patch(`/API/country/${id}`, country);