import axios from 'axios';

function getAll(){
    axios.get('https://restcountries.com/v3.1/all')
    .then((res) => res.data)
    .catch((err)=> err)
}

export{
    getAll

}