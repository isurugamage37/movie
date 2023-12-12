
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  searchQuery: string = '';
  availableMovies: any[] = [];
  searchedMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.fetchAvailableMovies();
  }

  fetchAvailableMovies() {
    this.movieService.getAvailableMovies().subscribe(
      (data) => {
        this.availableMovies = data.Search || [];
      },
      (error) => {
        console.error('Error fetching available movies:', error);
      }
    );
  }

  searchMovie() {
    if (this.searchQuery.trim() !== '') {
      this.movieService.searchMovie(this.searchQuery).subscribe(
        (data) => {
          // Clear available movies list
          this.availableMovies = [];
          console.log("dhdgfjdgfjd11111",data);
          // Update the searched movies list with search results
          this.searchedMovies.push(data) ;
          console.log("dhdgfjdgfjd",this.searchedMovies);
        },
        (error) => {
          console.error('Error fetching movie details:', error);
          // Handle errors here, e.g., display an error message to the user
        }
      );
    } else {
      // Clear searched movies list if search query is empty
      this.searchedMovies = [];
      // Fetch available movies again when search query is empty
      this.fetchAvailableMovies();
    }
  }
}
