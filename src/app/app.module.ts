import { GamesService } from './components/games-app/product-list/product-list.component.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { GamesAppComponent } from './components/games-app/games-app.component';
import { FiltersComponent } from './components/games-app/filters/filters.component';
import { ProductListComponent } from './components/games-app/product-list/product-list.component';
import { ProductItemComponent } from './components/games-app/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    GamesAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
