import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockBooksComponent } from "./block-books/block-books.component";

const routes: Routes = [
  {
    path: '',
    component: BlockBooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BooksRoutingModule {}
