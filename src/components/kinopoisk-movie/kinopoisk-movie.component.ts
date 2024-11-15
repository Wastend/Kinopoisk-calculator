import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-kinopoisk-movie',
  standalone: true,
  imports: [],
  templateUrl: './kinopoisk-movie.component.html',
  styleUrl: './kinopoisk-movie.component.scss'
})
export class KinopoiskMovieComponent implements OnInit {

  private id: string | null = null;
  public title: string | null = null;
  public description: string | null = null;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.movieService.getMovieDetails(this.id).subscribe(movie => {
      console.log(movie);
      this.title = movie.name;
      this.description = movie.description;
    })



  }
}
