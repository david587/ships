
// File: api.service.ts
// Author: Baráth Dávid
// Copyright: 2023, Baráth Dávid
// Group: Szoft 2 N
// Date: 2023-04-18
// Github: https://github.com/davis587/
// Licenc: GNU GPL


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
  apihost = 'http://localhost:8000/ships';

  constructor(private http: HttpClient) {}

  getShips() {

    return this.http.get<any>(this.apihost);
  }

  addShip(ship: any) {
  

    let headers = new HttpHeaders({
      'Content-Type': 'applicaton/json',
    });

    let httpOption = {
      headers: headers
    };
    
    return this.http.post<any>(this.apihost, ship, httpOption);
  }
}
