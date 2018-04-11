import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'

import { Http } from '@angular/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { ErrorHandler } from '../app.error-handler'
import { Song } from '../song/song.model'

import { MEAT_API } from '../app.api'

@Injectable()
export class SongsService{
  constructor(private http:Http){}

  songs(): Observable<Song[]>{
    return this.http.get(`${MEAT_API}/songs`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}
