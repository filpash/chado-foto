import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockAboutComponent } from "./block-about/block-about.component";

const routes: Routes = [
  {
    path: '',
    component: BlockAboutComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AboutRoutingModule {}
