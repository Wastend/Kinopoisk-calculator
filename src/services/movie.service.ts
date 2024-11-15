import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.kinopoisk.dev';
  private apiKey = 'ZRHRB7E-210MNAZ-H51TMGK-B5VMKP7';

  constructor(private http: HttpClient) {}

  getMovies(text: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-API-KEY': this.apiKey,
      'Content-Type': 'application/json'
    });

    const url = `${this.apiUrl}/v1.4/movie/search?page=1&limit=10&query=${text}`;

    return this.http.get(url, { headers });
  }

  getMovieDetails(id: string | null): Observable<any> {
    const headers = new HttpHeaders({
      'X-API-KEY': this.apiKey,
      'Content-Type': 'application/json'
    });

    const url = `${this.apiUrl}/v1.4/movie/${id}`;
    console.log(url)
    return this.http.get(url, { headers });
  }
}
