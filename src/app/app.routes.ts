import { Routes } from '@angular/router';
import {CalculatorComponent} from '../components/calculator/calculator.component';
import {HomeComponent} from '../components/home/home.component';
import {Page404Component} from '../components/page404/page404.component';

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
    path: '**',
    component: Page404Component,
    title: 'Calculator',
  },
];
