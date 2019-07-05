import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://freyja-ah-backend.herokuapp.com/',
});

instance.interceptors.request.use(
  (config) => {
    // get token expiry and compare with time now

    const token = localStorage.getItem('token');
    config.headers.authorization = token;
    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  response => response,

  error => {
    const { data } = error.response;
    if (data.status === 401 && (data.error === "No Authentication Token Provided" || data.error === "token not verified")) {
      window.href = '/login';
    }
    return Promise.reject(error),
  }
);

export default instance;