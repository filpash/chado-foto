import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from "@angular/router";
import { BOOKS, CAROUSEL, COLLAPSE, WINDOW } from "./tokens";
import { DATA } from "../../public/data";
import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [
    SafePipe
  ],
  exports: [
    SafePipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    { provide: WINDOW,  useValue: window },
    { provide: CAROUSEL, useValue: DATA.carousel },
    { provide: COLLAPSE, useValue: DATA.collapse },
    { provide: BOOKS, useValue: DATA.books }
  ]
})
export class CoreModule { }
