
import * as axios from 'axios';
import { observable, action, computed, autorun } from "mobx";
import { IRestApi, RestGetAllResponse } from 'api/IRestApi';

class RestApi<Entity> implements IRestApi<Entity> {
  @observable csrftoken = "";
  listAction: string;
  axios: any;

  constructor(module: string) {
    this.listAction = '/api/' + module + '/';
    this.axios = axios;
    this.axios.defaults.headers.post['Content-Type'] = 'application/json';
    this.axios.defaults.credentials = 'same-origin';
  }


  getAll(): Promise<RestGetAllResponse<Entity>> {
    let fetchUrl = this.listAction;
    return this.axios.get(fetchUrl)
      .then((response: any) => {
        return response.data;
      });
  }


  update(data: Entity, itemId: number): Promise<Entity> {
    const url = this.listAction + itemId;
    return this.axios.put(url, data)
      .then((response: any) => {
        return response.data;
      });
  }

  insert(data: Entity): Promise<Entity> {
    return this.axios.post(this.listAction, data)
      .then((response: any) => {
        return response.data;
      });
  }

  delete(itemId: number) {
    const url = this.listAction + itemId;
    return this.axios.delete(url)
      .then((response: any) => {
        return (response.status >= 200 && response.status < 300) || response.status === 404;
      })
      .catch((error: any) => {
        let response = error.response;
        if (response.status === 500) {
          throw new Error(response.data);
        } else if (response === 404) {
          return true;
        }
        return response;
      });
  }

  postUrl(url: string, data: any) {
    return this.axios.post(url, data)
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        throw { Message: 'Operation could not complete.' };
      });

  }

  getUrl(url: string) {
    return this.axios.get(url)
      .then((response: any) => {
        return response.data;
      });
  }

  getApiUrl(url: string) {
    return this.axios.get(this.listAction + url + '/')
      .then((response: any) => {
        return response.data;
      });
  }

}


export { RestApi };
