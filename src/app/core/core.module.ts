import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from "@angular/router";
import { CAROUSEL, COLLAPSE, WINDOW } from "./tokens";
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
    { provide: WINDOW,  useValue: window },
    { provide: CAROUSEL, useValue: DATA.carousel },
    { provide: COLLAPSE, useValue: DATA.collapse }
  ]
})
export class CoreModule { }
