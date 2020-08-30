import AxiosHttpClient from './http-client';
import { HttpResponse } from '../types';

const LoadProfileGithub = async (username: string): Promise<HttpResponse> => {
  return new AxiosHttpClient({
    url: `https://api.github.com/users/${username}`,
    method: 'get',
  }).request();
};

export default LoadProfileGithub;
