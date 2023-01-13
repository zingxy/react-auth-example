import axios, { AxiosError } from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { ROLES } from '../routes';

const instance = axios.create({
  baseURL: 'http://localhost:3456',
});

/* 拦截器 使得每个请求都带上token */
instance.interceptors.request.use(
  (config) => {
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
  },
  (err) => {
    console.log('未知错误', err);
    return Promise.reject(err);
  }
);

/* 取出AxionsResponse.data */
instance.interceptors.response.use(
  async (response) => {
    return {
      ...response.data,
      code: response.data,
    };
  },
  (err: AxiosError) => {
    console.log(err);

    if (!err.response) {
      return Promise.reject<GeneralResponseData>({
        code: 0,
        msg: '网络错误',
      });
    } else {
      const { status = 0, data = {} } = err.response;
      return Promise.reject<GeneralResponseData>({
        code: status,
        ...(data as object),
      });
    }
  }
);

/* 通用函数请求函数 */
export async function request<T = unknown>(config: AxiosRequestConfig) {
  return instance.request<T, T>(config);
}

export async function fetcher<T = unknown>(
  url: string,
  config: AxiosRequestConfig
) {
  return instance.request<T, T>({ ...config, url });
}

/* *****类型****** */
export interface GeneralResponseData {
  code: number;
  msg: string;
}

/* 登录请求 */
export type SignInResponseData = GeneralResponseData & {
  id: string;
  token: string;
  username: string;
  roles: ROLES[];
};
export async function signin(username: string, password: string) {
  return request<SignInResponseData>({
    method: 'post',
    url: 'api/auth/signin',
    data: {
      username,
      password,
    },
  }).then((data) => {
    const { token } = data;
    localStorage.setItem('token', token);
    return data;
  });
}
/* 注册 */
export type SignUpResponseData = GeneralResponseData;
export async function singup() {
  return request<SignUpResponseData>({
    method: 'post',
    url: 'api/auth/signup',
  });
}

/*
#Codeblock 
{
  注销, 清除token, 并向后端发送请求，注销掉这个token
}
*/
export type SingOutResponseData = GeneralResponseData;
export async function signout() {
  localStorage.setItem('token', '');

  return request<SingOutResponseData>({
    method: 'post',
    url: 'api/auth/signout',
  });
}

/**
 * @codeblock
 * @description 获取公共数据的接口
 */
export type PublicResponseData = GeneralResponseData;
export async function getPublicContent() {
  return request<PublicResponseData>({ url: 'api/test/public' });
}

/**
 * @codeblock
 * @description 获取User数据的api
 */
export type UserContentResponseData = GeneralResponseData;
export async function getUserContent() {
  return request<UserContentResponseData>({
    url: 'api/test/user',
  });
}

/**
 * @codeblock
 * @description 获取Admin数据
 */
export type AdminContentResponseData = GeneralResponseData;
export async function getAdminContent() {
  return request<AdminContentResponseData>({
    url: 'api/test/admin',
  });
}

export async function fakeAPI() {
  return instance.get('sdfs').then((value) => console.log('success'));
}
