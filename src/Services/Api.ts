import axios, { AxiosError, AxiosResponse } from 'axios';

const create = axios.create({
  baseURL: 'http://localhost:3000'
});

const Api = {
  get: (url: string) => {
    return new Promise((resolve, reject) => {
      create.get(url).then(
        (response: AxiosResponse) => {
          resolve(response.data);
        },
        (error: AxiosError) => {
          reject(error);
        }
      );
    });
  },
  // TODO: tipar "any" do body?
  post: (url: string, body: any) => {
    return new Promise((resolve, reject) => {
      create.post(url, body).then(
        (response: AxiosResponse) => {
          resolve(response.data);
        },
        (error: AxiosError) => {
          reject(error);
        }
      );
    });
  }
};

export default Api;
