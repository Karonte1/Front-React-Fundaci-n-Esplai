import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'https://bookstore-api-a6n5.onrender.com',
  headers: {
    ivan: 'hola qué ase'
  }
});

export default axiosAPI;
