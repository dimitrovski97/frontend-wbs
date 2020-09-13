import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ManufacturerModel} from '../Models/manufacturerModel';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerServiceService {
  private manufacturerURL = 'http://localhost:8080/getMan/';  // URL to web api
  constructor(private http: HttpClient) { }
  getManufacturerInfo(name: string): Observable<ManufacturerModel> {
    return this.http.get<ManufacturerModel>(this.manufacturerURL.concat(name));
  }
}
