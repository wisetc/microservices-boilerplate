import urljoin from 'url-join';
import axios, { AxiosInstance } from 'axios';
import * as request from './_base/request';
import * as response from './_base/response';

export const SERVER_NAME = '@account';

export const HOST = process.env.HOST || 'http://api.scope.com';

const baseURL = urljoin(HOST, SERVER_NAME);

const ins: AxiosInstance = axios.create({
  baseURL,
  headers: request.requestHeaders,
  transformRequest: [request.transformRequest],
  timeout: 10000
});

ins.interceptors.response.use(
  response.responseInterceptor,
  response.exceptionInterceptor
);

export default ins;
