import { Component, OnInit } from '@angular/core';

import { Genre } from '../genre/genre.model'

import { GenresService } from './genres.service'

@Component({
  selector: 'mt-genres',
  templateUrl: './genres.component.html',
})
export class GenresComponent implements OnInit {

  genres: Genre[]

  constructor(private genresService: GenresService) { }

  ngOnInit() {
    this.genresService.genres().subscribe(genres => this.genres = genres);
  }

}
