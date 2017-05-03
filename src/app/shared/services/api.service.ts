import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

const API_URL = "http://localhost:3000/api";

@Injectable()
export class ApiService {
  private defaultHeader = {'content-type': 'application/json'};

  constructor(private http: Http) { }

  public get(url, options?) {
    let opt = Object.assign({}, this.defaultHeader, options);
    return this.http.get(`${API_URL}/${url}`, opt)
                    .map((res: Response) => res.json());
  }

  public post(url, data, options?) {
    let opt = Object.assign({}, this.defaultHeader, options);
    return this.http.post(`${API_URL}/${url}`, data, opt)
                    .map((res: Response) => res.json());
  }

  public put(url, data, options?) {
    let opt = Object.assign({}, this.defaultHeader, options);
    return this.http.put(`${API_URL}/${url}`, data, opt)
                    .map((res: Response) => res.json());
  }

  public delete(url, options?) {
    let opt = Object.assign({}, this.defaultHeader, options);
    return this.http.delete(`${API_URL}/${url}`, opt)
                    .map((res: Response) => res.json());
  }
}
