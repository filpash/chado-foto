import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from "./modals.component";
import { ModalFamilyComponent } from "./modal-family/modal-family.component";
import { ModalOrthComponent } from "./modal-orth/modal-orth.component";
import { ModalPortraitComponent } from "./modal-potrait/modal-portrait.component";
import { ModalWaitingComponent } from "./modal-waiting/modal-waiting.component";
import { ModalWeddingComponent } from "./modal-wedding/modal-wedding.component";
import { SpritesComponent } from "../sprites/sprites.component";


@NgModule({
  declarations: [
    SpritesComponent,
    ModalsComponent,
    ModalFamilyComponent,
    ModalOrthComponent,
    ModalPortraitComponent,
    ModalWaitingComponent,
    ModalWeddingComponent
  ],
  exports: [
    ModalsComponent,
    ModalFamilyComponent,
    ModalOrthComponent,
    ModalPortraitComponent,
    ModalWaitingComponent,
    ModalWeddingComponent,
    SpritesComponent
  ],
  imports: [
    CommonModule,
  ]
})

export class ModalModule {}
