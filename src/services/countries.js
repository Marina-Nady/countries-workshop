import axios from 'axios';
const endPoint = 'data.json'

const getAll = () => axios.get(`${endPoint}`);



export{
    getAll,
    

}