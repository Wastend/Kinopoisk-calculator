import { Routes } from '@angular/router';
import {CalculatorComponent} from '../components/calculator/calculator.component';
import {HomeComponent} from '../components/home/home.component';
import {Page404Component} from '../components/page404/page404.component';
import {kinopoiskRoutes} from '../components/kinopoisk/kinopoisk.routes';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'HomePage',
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
    title: 'Calculator',
  },
  {
    path: 'kinopoisk',
    children: kinopoiskRoutes,
  },
  {
    path: '**',
    component: Page404Component,
    title: 'Calculator',
  },
];
