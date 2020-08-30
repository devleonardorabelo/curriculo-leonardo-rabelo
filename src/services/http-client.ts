/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { Method, AxiosResponse } from 'axios';
import { HttpClient, HttpRequest, HttpResponse } from '../types';

class AxiosHttpClient implements HttpClient {
  url: string;

  method: Method;

  data: any;

  headers: any;

  constructor(data: HttpRequest) {
    this.url = data.url;
    this.method = data.method;
    this.data = data.body;
    this.headers = data.headers;
  }

  async request(): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: this.url,
        method: this.method,
        data: this.data,
        headers: this.headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}

export default AxiosHttpClient;
