import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'

import { Http } from '@angular/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { ErrorHandler } from '../app.error-handler'
import { Genre } from '../genre/genre.model'
import { MenuItem } from '../menu-item/menu-item.model'

import { MEAT_API } from '../app.api'

@Injectable()
export class GenresService{
  constructor(private http:Http){}

  genres(): Observable<Genre[]>{
    return this.http.get(`${MEAT_API}/genres`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  genre(id: string): Observable<Genre> {
    return this.http.get(`${MEAT_API}/genres/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  menu(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/genres/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
    }

  reviews(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/genres/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }
}
