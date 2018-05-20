import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Constants } from './constants';
@Injectable()
export class CatagoriesService {

  constructor(private http: HttpClient) {
  }

  getCatagories(): Observable<any> {
   return this.http.get(Constants.GET_CATAGORIES)
  }
}