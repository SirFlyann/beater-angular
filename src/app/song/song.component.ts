import { Component, OnInit, Input } from '@angular/core';

import { Song } from './song.model'

@Component({
  selector: 'mt-song',
  templateUrl: './song.component.html'
})
export class SongComponent implements OnInit {

  @Input() song: Song
  constructor() { }

  ngOnInit() {
  }

}
