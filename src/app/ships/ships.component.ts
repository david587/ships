import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ship',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent {
  hajoForm: FormGroup;
  ships: any[] = [];

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.hajoForm = this.formBuilder.group({
      brand: ['']
    });
  }

  ngOnInit() {
    this.apiService.getShips().subscribe(res => {
      this.ships = res;
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
