import { Component, OnInit } from '@angular/core';

import { GenresService } from '../genres/genres.service'

import { Observable } from 'rxjs/Observable'

import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>
    constructor(
      private genresService: GenresService,
      private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.reviews = this.genresService.reviews(this.route.parent.snapshot.params['id']);
  }

}
