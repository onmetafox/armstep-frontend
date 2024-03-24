import axios from 'axios';

let Axios;
Axios = axios.create({
  responseType: 'json',
});

Axios.interceptors.request.use(function (options) {
  return options;
});

Axios.interceptors.response.use(response => response.data);

export default Axios;
