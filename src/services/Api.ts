// instancias de axios

import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 4000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default Api;