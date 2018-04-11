import { Component, OnInit, Input } from '@angular/core';

import { Genre } from './genre.model'

@Component({
  selector: 'mt-genre',
  templateUrl: './genre.component.html'
})
export class GenreComponent implements OnInit {

  @Input() genre: Genre
  constructor() { }

  ngOnInit() {
  }

}
