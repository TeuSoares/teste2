import { api } from '../config/api';

import { Method } from 'axios';

export const useFetch = () => {
  const fetch = async (method: Method, url: string, data?: object) => {
    let response;

    const dataJSON = JSON.stringify(data);

    if (method == 'GET' || method == 'DELETE') {
      response = await api.request({ url, method });
    } else if (method == 'POST' || method == 'PUT' || method == 'PATCH') {
      response = await api.request({
        url,
        method,
        data: dataJSON
      });
    }

    return response?.data;
  };
  return {
    fetch
  };
};
