import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'

import {AboutComponent} from './about/about.component'

import {GenresComponent} from './genres/genres.component'
import {GenreDetailComponent} from './genre-detail/genre-detail.component'

export const ROUTES: Routes =[

    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'genres', component: GenresComponent},
    {path: 'genres/:id', component: GenreDetailComponent}
]
