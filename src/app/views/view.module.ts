import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { AboutModule } from "./components/about/about.module";
import { ServiceModule } from "./components/service/service.module";
import { PortfolioModule } from './components/portfolio/portfolio.module';
import { BooksModule } from "./components/books/books.module";
import { ModalModule } from "./layout/modals/modal.module";
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SocialComponent } from './layout/social/social.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BooksComponent } from './pages/books/books.component';
import { BlockAboutComponent } from './components/about/block-about/block-about.component';
import { BlockServiceComponent } from './components/service/block-service/block-service.component';
import { BlockPortfolioComponent } from "./components/portfolio/block-portfolio/block-portfolio.component";
import { BlockBooksComponent } from "./components/books/block-books/block-books.component";


@NgModule({
  declarations: [
    AboutComponent,
    BlockAboutComponent,
    BlockServiceComponent,
    BlockPortfolioComponent,
    BlockBooksComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    ServiceComponent,
    PortfolioComponent,
    BooksComponent
  ],
  exports: [
    AboutComponent,
    ServiceComponent,
    PortfolioComponent,
    BooksComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    AboutModule,
    ServiceModule,
    PortfolioModule,
    BooksModule,
    ModalModule
  ]
})
export class ViewModule { }
