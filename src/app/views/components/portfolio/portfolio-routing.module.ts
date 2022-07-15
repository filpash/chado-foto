import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockPortfolioComponent } from "./block-portfolio/block-portfolio.component";

const routes: Routes = [
  {
    path: '',
    component: BlockPortfolioComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PortfolioRoutingModule {}
