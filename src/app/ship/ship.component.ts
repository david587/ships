
// File: ship.component.ts
// Author: Baráth Dávid
// Copyright: 2023, Baráth Dávid
// Group: Szoft 2 N
// Date: 2023-04-18
// Github: https://github.com/davis587/
// Licenc: GNU GPL


import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent {
  hajoForm: FormGroup;
  ships: any = [];

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.hajoForm = this.formBuilder.group({
      name: [''],
      length: [''],
      price: [''],
      person: [''],
      trailer: [''],
    });
  }

  ngOnInit() {
    this.gethajo();
  }

  gethajo()
  {
    this.apiService.getShips().subscribe(res => {
      this.ships = res;
      console.log(res);
      
    });
  }

  onClick() {
    this.addHajo();
  }

  addHajo() {
    let data = {
      brand: this.hajoForm.value.brand,
    };

    this.apiService.addShip(data).subscribe({
      next: (data:any) => {
        console.log("siker");
      },
      error: (err:any) => {
      }
    });
  }
}
