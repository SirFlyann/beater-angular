import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'

import {AboutComponent} from './about/about.component'

import {SongsComponent} from './songs/songs.component'
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component'

export const ROUTES: Routes =[

    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'songs', component: SongsComponent},
    {path: 'songs/:id', component: RestaurantDetailComponent}
]
