import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./views/pages/about/about.component";
import { ServiceComponent } from "./views/pages/service/service.component";


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
