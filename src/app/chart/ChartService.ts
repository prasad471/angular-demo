import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  uri = 'https://api.bluecitytechnology.com/s/smp/';

  constructor(private http: HttpClient) { }


  getChartData() {
    return this
           .http
           .get(`${this.uri}`);
  }
}
