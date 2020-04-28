import { AxiosResponse, AxiosError } from 'axios';

type Result<T> = {
  code: number;
  data: T;
  message: string;
};

export type ResultPromise<T> = Promise<AxiosResponse<Result<T>>>;

export const responseInterceptor = (response: AxiosResponse) => response;

export const exceptionInterceptor = (error: AxiosError) => {
  const response = error.response;
  let tip = '故障';
  let feedbackMethod = console.warn;

  if (!response) {
    tip = '没响应';
  } else {
    const status = response ? response.status : 0;
    if (status === 404) {
      tip = '不在了';
    } else if (status === 500 && response.data.message) {
      tip = `[${status}] ${response.data.message}`;
      feedbackMethod = console.error;
    } else {
      tip = `[${status}] 不给力`;
    }
  }
  feedbackMethod('抱歉～ ' + tip);
  console.log(typeof error.response === 'undefined' ? '' : error.response.data);
  return Promise.reject(error);
};
