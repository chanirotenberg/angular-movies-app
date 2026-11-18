import { Component, Input, OnInit, SimpleChanges, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { NgStyle, NgClass, DatePipe, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie';
import { MovieComponent } from '../movie/movie';
import { MovieType } from '../../models/movie.type.enum';


@Component({
  selector: 'app-movies',
  imports: [NgStyle, NgClass, DatePipe,CommonModule,MovieComponent ],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies{
  title = "Movies Works!!";

  public listOfMovies: Movie[] = [
    {
      name: 'The Shawshank Redemption',
      mainCharacter: 'Andy Dufresne',
      rating: 7.5,
      releaseDate: new Date(),
      type: MovieType.Action
    },
    {
      name: 'The Godfather',
      mainCharacter: 'Vito Corleone',
      rating: 8.5,
      releaseDate: new Date(2018,11,20),
      type: MovieType.Drama
    },
    {
      name: 'The Dark Knight',
      mainCharacter: 'Bruce Wayne', 
      rating: 6.5,
      releaseDate: new Date(2014,8,20),
      type: MovieType.Action
    }
  ];

  // ngOnInit() {
  //   console.log("Movies On Init")
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);

  // }

  // ngAfterViewInit() {
  //   console.log("Movies After View Init")
  // }
  // ngOnDestroy(): void {
  //   console.log("Movies On Destroy")
  // }
}
