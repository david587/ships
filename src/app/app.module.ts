
// File: app.module.ts
// Author: Baráth Dávid
// Copyright: 2023, Baráth Dávid
// Group: Szoft 2 N
// Date: 2023-04-18
// Github: https://github.com/davis587/
// Licenc: GNU GPL


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipComponent } from './ship/ship.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MukodjComponent } from './mukodj/mukodj.component';
import { ApiService } from './api.service';

@NgModule({

  declarations: [
    AppComponent,
    ShipComponent,
    MukodjComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
