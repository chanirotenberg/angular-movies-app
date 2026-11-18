import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Movies } from './components/movies/movies';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Movies],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sample-app');
  title2 = 'fgfg';
  shouldDisplayMovie = true;

  toggleMovieComponent() {
    this.shouldDisplayMovie = !this.shouldDisplayMovie;
  }
}
