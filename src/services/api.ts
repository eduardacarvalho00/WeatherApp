import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com/weather?',
  params: {
    key: ' 86c4cc4e',
    format: 'json-cors',
    locale: 'en',
  },
});
export default api;
