import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor(private httpClient: HttpClient) { }

  getData(dataLink: string) {
    return this.httpClient.get(dataLink);
  }
}
