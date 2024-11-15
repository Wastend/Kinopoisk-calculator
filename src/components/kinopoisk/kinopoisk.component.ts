import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-kinopoisk',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kinopoisk.component.html',
  styleUrls: ['./kinopoisk.component.scss']
})
export class KinopoiskComponent {
  public movies: any[] = [];
  public movieSearch = '';

  constructor(private movieService: MovieService,private router: Router) {}

  navigateToDetail(id: string) {
    this.router.navigate(['/kinopoisk', id]);
  }

  public findMovies() {
    this.movieService.getMovies(this.movieSearch).subscribe(
      (data) => {
        console.log(data)
        this.movies = data.docs;
      },
      (error) => {
        console.error('Error fetching movies', error);
      }
    );
  }
}
