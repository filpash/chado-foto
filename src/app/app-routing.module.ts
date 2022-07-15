import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'about',
        loadChildren: () => import('./views/components/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./views/components/service/service.module').then(m => m.ServiceModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./views/components/portfolio/portfolio.module').then(m => m.PortfolioModule)
      },
      {
        path: 'books',
        loadChildren: () => import('./views/components/books/books.module').then(m => m.BooksModule)
      },
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      }
    ]
  }
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
