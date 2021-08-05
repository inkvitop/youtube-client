import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/main/card/card.component';
import { UserComponent } from './components/header/user/user.component';
import { SearchComponent } from './components/header/search/search.component';
import { SortComponent } from './components/header/sort/sort.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, FooterComponent, CardComponent, UserComponent, SearchComponent, SortComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
