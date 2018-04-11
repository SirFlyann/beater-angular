import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ErrorHandler } from '../app.error-handler';
import { Genre } from '../genre/genre.model';

import { MEAT_API } from '../app.api';

@Injectable()
export class GenreService {
  constructor(private http: Http) {}

  genre(id): Observable<Genre[]> {
    return this.http.get(`${MEAT_API}/genres?id=${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
}
