import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from "@angular/router";
import { AboutComponent } from './pages/about/about.component';
import { CoreModule } from "../core/core.module";
import { BlockAboutComponent } from './components/about/block-about/block-about.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SocialComponent } from './layout/social/social.component';
import { SpritesComponent } from './layout/sprites/sprites.component';
import { ServiceComponent } from './pages/service/service.component';
import { BlockServiceComponent } from './components/service/block-service/block-service.component';
import { ModalsComponent } from './layout/modals/modals.component';



@NgModule({
  declarations: [
    AboutComponent,
    AboutComponent,
    BlockAboutComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    SpritesComponent,
    BlockServiceComponent,
    ServiceComponent,
    ModalsComponent
  ],
  exports: [
    AboutComponent,
    ServiceComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    CoreModule
  ]
})
export class ViewModule { }
