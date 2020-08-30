/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Profile {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: string;
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete';

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};

export type HttpClient<R = any> = {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
};
