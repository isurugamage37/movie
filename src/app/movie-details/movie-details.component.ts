import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  @Input() movieDetails: any; // Assuming 'any' type for simplicity

  shareMovie() {
    const movieTitle = this.movieDetails.Title;
    const imdbUrl = `https://www.imdb.com/title/${this.movieDetails.imdbID}`;

    if (navigator.share) {
      navigator.share({
        title: movieTitle,
        text: `Check out ${movieTitle} on IMDb!`,
        url: imdbUrl
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      // Provide fallback for browsers that do not support the Web Share API
      const shareMessage = `Check out ${movieTitle} on IMDb: ${imdbUrl}`;
      const textArea = document.createElement('textarea');
      textArea.value = shareMessage;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Movie details copied to clipboard. You can manually share the information.');
    }
  }
}