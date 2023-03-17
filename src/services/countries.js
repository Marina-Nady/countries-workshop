import axios from 'axios';
let endPoint = 'http://localhost:3000/data'

const getAll = () => axios.get(`${endPoint}`);
const getDetails = (name) => axios.get(`${endPoint}?name=${name}`);


export{
    getAll,
    getDetails

}