import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3456',
});

/* 拦截器 使得每个请求都带上token */
instance.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers = {
      ...config.headers,
      Authorization: localStorage.getItem('token') ?? '',
    };
    if (config.method === 'post') {
      config.headers = {
        ...config.headers,
        Authorization: localStorage.getItem('token') ?? '',
      };
    }
  }

  return config;
});




async function signin(username: string, password: string) {
  return axios.post('api/auth/signin', { username, password });
}

const API = {};

export default API;
