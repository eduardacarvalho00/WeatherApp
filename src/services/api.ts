import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com/weather?',
  params: {
    key: 'd2315289',
    locale: 'en',
    format: 'json-cors',
  },
});
export default api;
