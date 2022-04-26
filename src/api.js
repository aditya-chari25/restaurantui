import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default axios.create({
    baseURL: `https://foodelauth.herokuapp.com/`,
});