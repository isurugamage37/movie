import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie: any; // Assuming 'any' type for simplicity

  shareMovie() {
    const movieTitle = this.movie.Title;
    const imdbUrl = `https://www.imdb.com/title/${this.movie.imdbID}`;

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