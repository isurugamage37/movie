import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  public getMovies(text: string, sourceLan: string, transLan: string): Observable<any> {

    const apiUrl = 'https://api.mymemory.translated.net/get?q=' + text + '&langpair=' + sourceLan + '|' + transLan;

    http://www.omdbapi.com/?i=tt3896198&apikey=90f64435

    return this.http.get(apiUrl);
  }
}
