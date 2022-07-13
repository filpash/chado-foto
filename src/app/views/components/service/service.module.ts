import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceRoutingModule } from "./service-routing.module";

@NgModule({
  exports: [],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})

export class ServiceModule {}
