import { MovieType } from "./movie.type.enum";

export interface Movie {
  name: string;
  mainCharacter: string;
  rating: number;
  releaseDate: Date;
  type: MovieType;
}