import axios from 'axios';
const endPoint = 'https://restcountries.com/v3.1'
// const endPoint = 'data.json'

const getAll = () => axios.get(`${endPoint}/all`);
const getByName = (name) => axios.get(`${endPoint}/name/${name}`);
const getByCode = (code) => axios.get(`${endPoint}/alpha/${code}`);




export{
    getAll,
    getByName,
    getByCode
    

}