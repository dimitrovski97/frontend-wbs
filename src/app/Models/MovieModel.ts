export class MovieModel {
  movieId: string;
  name: string;
  description: string;
  director: string;
  movieGenre: string;
  moviePoster: string;
  publicationDate: string;
}
export function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

