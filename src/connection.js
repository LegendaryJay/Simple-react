import axios from 'axios';

// connection object
const api = axios.create({
    baseURL: 'https://olympic-medal.azurewebsites.net',
});

//connection controller takes in api object and returns an object with all the functions
const ConnectionController = (api) => {
    return {
        getAllCountries: () => api.get('/API/country'),
        getCountryById: (id) => api.get(`/API/country/${id}`),
        setCountry: (country) => api.post('/API/country', country),
        deleteCountry: (id) => api.delete(`/API/country/${id}`),
        updateCountry: (id, country) => api.put(`/API/country/${id}`, country),
        searchCountry: (name) => api.get(`/API/country/search/${name}`),
        patchCountry: (id, country) => api.patch(`/API/country/${id}`, country),
    };
};

// country list controller takes in connection controller handles all the data manipulation
function CountryListController(connectionController) {
    const getAllCountries = async () => {
        const { data } = await connectionController.getAllCountries();
        return data;

    };
    const getCountryById = async (id) => {
        const { data } = await connectionController.getCountryById(id);
        return data;

    };
    const setCountry = async (country) => {
        country.id = 0;
        const { data } = await connectionController.setCountry(country);
        return data;
    };
    const deleteCountry = async (id) => {
        await connectionController.deleteCountry(id);
               
    };
    const updateCountry = async (country) => {
        const { data } = await connectionController.updateCountry(country.id,country);
        return data;      
    };
    const searchCountry = async (name) => {
        const { data } = await connectionController.searchCountry(name);
        return data;
    };
    const patchCountry = async (country) => {
        const { data } = await connectionController.patchCountry(country.id, country);
        return data;
    };
    return {
        getAllCountries,
        getCountryById,
        setCountry,
        deleteCountry,
        updateCountry,
        searchCountry,
        patchCountry,
    };
}

export const countryManager = new CountryListController(ConnectionController(api));