import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { CommonModule } from '@angular/common';
import { MovieType } from '../../models/movie.type.enum';


@Component({
  selector: 'app-movie',
  imports: [CommonModule],
  templateUrl: './movie.html',
  styleUrl: './movie.scss',
})
export class MovieComponent {
   constructor() {}  

get movieTypeEnum() {
  return MovieType;
}

  @Input() movie!: Movie;
  //  = {
  //   name: 'The Shawshank Redemption',
  //   mainCharacter: 'Andy Dufresne',
  //   rating: 7.1,
  //   releaseDate: new Date(),
  // };
  // public changeMovie(event: Event) : void {
  //   this.movie = {
  //     name: 'The Dark Knight',
  //     mainCharacter: 'Bruce Wayne',
  //     rating: 9.0,
  //      releaseDate: new Date(),
  //   };
  // }
}
