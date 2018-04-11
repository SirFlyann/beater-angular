import { Component, OnInit } from '@angular/core';

import { Song } from '../song/song.model'

import { SongsService } from './songs.service'

@Component({
  selector: 'mt-songs',
  templateUrl: './songs.component.html',
})
export class SongsComponent implements OnInit {

  songs: Song[]

  constructor(private songsService: SongsService) { }

  ngOnInit() {
    this.songsService.songs().subscribe(songs => this.songs = songs);
  }

}
