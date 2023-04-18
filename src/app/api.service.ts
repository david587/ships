import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
  apihost = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  getShips() {
    let endpoint = 'Products';
    let url = this.apihost + endpoint;
    return this.http.get<any>(url);
  }

  addShip(ship: any) {
    let endpoint = 'Products/Store';
    let url = this.apihost + endpoint;

    let headers = new HttpHeaders({
      'Content-Type': 'applicaton/json',
    });

    let httpOption = {
      headers: headers
    };
    
    return this.http.post<any>(url, ship, httpOption);
  }
}
