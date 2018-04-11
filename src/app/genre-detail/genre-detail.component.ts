import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Genre } from '../genre/genre.model';

import { GenreService } from '../genre/genre.service';

@Component({
  selector: 'mt-genre-detail',
  templateUrl: './genre-detail.component.html',
})
export class GenreDetailComponent implements OnInit {

  genre: Genre[];

  constructor(genreService: GenreService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.params);

    // this.genreService.genre(id).subscribe(genres => this.genres = genres);
  }

}
