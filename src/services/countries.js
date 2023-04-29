import axios from 'axios';
// let endPoint = 'https://restcountries.com/v3.1'
const endPoint = ' http://localhost:3000/data'

const getAll = () => axios.get(`${endPoint}`);
const getByName = (name) => axios.get(`${endPoint}?name=${name}`);
const getByRegion = (region) => axios.get(`${endPoint}?region=${region}`);



export{
    getAll,
    getByName,
    getByRegion

}