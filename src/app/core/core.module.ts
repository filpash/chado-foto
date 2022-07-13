import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from "@angular/router";
import { CAROUSEL } from "./tokens";
import { DATA } from "../../public/data";


@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    { provide: CAROUSEL, useValue: DATA.carousel }
  ]
})
export class CoreModule { }
