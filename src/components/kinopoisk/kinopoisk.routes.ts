import { Routes } from '@angular/router';
import {KinopoiskComponent} from './kinopoisk.component';
import {KinopoiskMovieComponent} from '../kinopoisk-movie/kinopoisk-movie.component';

export const kinopoiskRoutes: Routes = [
  {
    path: '',
    component: KinopoiskComponent,
    title: 'Kinopoisk',
  },
  {
    path: ':id',
    component: KinopoiskMovieComponent,
  }
];
