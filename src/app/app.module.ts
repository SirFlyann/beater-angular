import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GenresComponent } from './genres/genres.component';
import { GenreComponent } from './genre/genre.component'
import { GenresService } from './genres/genres.service';
import { GenreService } from './genre/genre.service';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';
import { MenuComponent } from './menu/menu.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './menu-item/menu-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    GenresComponent,
    GenreComponent,
    GenreDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    GenresService,
    GenreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
