import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private omdbApiKey = '90f64435';
  private omdbApiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  searchMovie(title: string): Observable<any> {
    const url = `${this.omdbApiUrl}?apikey=${this.omdbApiKey}&t=${title}`;
    return this.http.get(url);
  }

  getAvailableMovies(): Observable<any> {
    // You might need to adjust this endpoint based on your API or data source
    const url = 'http://www.omdbapi.com/?apikey=' + this.omdbApiKey + '&s=star'; // Example query for available movies
    return this.http.get(url);
  }
}