import { Component, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})

export class FilmSearchComponent implements OnInit {
  filmName: string = '';

  constructor() { }

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  getFilms() {
    this.searchEvent.emit(this.filmName); 
  }

}
