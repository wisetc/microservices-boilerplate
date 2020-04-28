import urljoin from 'url-join';
import { ResultPromise } from '../_base/response';
import axios, { HOST, SERVER_NAME } from '../http';
import { ReqUserInfoBean } from '../bean/ReqUserInfoBean';

export namespace ExampleApi {
  const _basePath = '';

  let _host = HOST;

  export function setHost(host: string) {
    _host = host;
  }

  type IHeader = {
    [k: string]: string;
  };

  export function applyHeaders(headers: IHeader) {
    for (const k in headers) {
      axios.defaults.headers.common[k] = headers[k];
    }
  }

  function g(...parts: string[]): string {
    return urljoin(_host, SERVER_NAME, _basePath, ...parts);
  }

  export function isValid(userid: string): ResultPromise<null> {
    return axios.get(g(`/isValid/${userid}`));
  }

  export function modifyUserInfo(
    userInfoBean: ReqUserInfoBean
  ): ResultPromise<null> {
    return axios.post(g('/modifyUserInfo'), userInfoBean);
  }
}
