import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmService } from './shared/film.service';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmSearchComponent } from './film-search/film-search.component';
import { FilmTileComponent } from './film-tile/film-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    FilmListComponent,
    FilmSearchComponent,
    FilmTileComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
