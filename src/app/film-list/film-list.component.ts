import { Component, OnInit } from '@angular/core';
import {FilmService} from '../shared/film.service';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})

export class FilmListComponent implements OnInit {
  cardViews = [
    {value: 'view1', viewValue: 'Film Card'},
    {value: 'view2', viewValue: 'Film Tile'}
  ];
  selectedView: string;
  filmList: Object[];
  filmName: string; 

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.selectedView = this.cardViews[0].value;
    this.filmList = [];
    this.filmName = 'Terminator';
    this.getFilms(this.filmName);
  }

  isFilmListEmpty(): boolean {
    return this.filmList && !this.filmList.length;
  }

  isFilledArray(filmsArray: any): boolean {
    return filmsArray && filmsArray.length;
  }

  getFilms(filmName: string) {
    this.filmCardService.getFilms(filmName).subscribe( (filmsArray: Object[] ) => {
      this.filmList = ( this.isFilledArray(filmsArray) ) ? filmsArray : [];
    })
  }

  buildGalleryBySearch(filmName: string) {
    this.filmName = filmName;
    this.getFilms(filmName);
  }

  addFilms() {
    this.filmCardService.getNextFilms(this.filmName).subscribe( (filmsArray: Object[] ) => {
      this.filmList = [...this.filmList, ...filmsArray];
    })
  }
}
 