import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.kinopoisk.dev';
  private apiKey = 'ZRHRB7E-210MNAZ-H51TMGK-B5VMKP7';
  protected headers = new HttpHeaders({
    'X-API-KEY': this.apiKey,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  getByGenre(genre: string, limit: number = 10): Observable<any> {
    const url = `${this.apiUrl}/v1.4/movie?page=1&limit=${limit}&notNullFields=top250&type=movie&genres.name=${genre}`;
    return this.http.get(url, {headers: this.headers});
  }

  getTop100(limit: number = 10): Observable<any> {
    const url = `${this.apiUrl}/v1.4/movie?page=1&limit=${limit}&type=movie&lists=top-100-movies`;
    return this.http.get(url, {headers: this.headers});
  }

  getMovies(text: string): Observable<any> {
    const url = `${this.apiUrl}/v1.4/movie/search?page=1&limit=10&query=${text}`;
    return this.http.get(url, {headers: this.headers});
  }

  getMovieDetails(id: string | null): Observable<any> {
    const url = `${this.apiUrl}/v1.4/movie/${id}`;
    return this.http.get(url, {headers: this.headers});
  }
}
