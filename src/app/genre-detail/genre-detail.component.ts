import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Genre } from '../genre/genre.model';

import { GenresService } from '../genres/genres.service';

@Component({
  selector: 'mt-genre-detail',
  templateUrl: './genre-detail.component.html',
})
export class GenreDetailComponent implements OnInit {

  genre: Genre;

  constructor(
    private genresService: GenresService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.genresService.genre(this.route.snapshot.params['id']).subscribe(genre => this.genre = genre);
  }

}
