import axios from 'axios'

const bsa = axios.create({
    baseURL: 'https://www.thesportsdb.com/api/v1/json/123'
});

export default bsa;