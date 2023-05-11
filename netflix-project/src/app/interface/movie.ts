export interface MovieItemComplete {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieItem {
  title: string;
  poster: string;
  year: string;
  rating: number;
  language: string;
  overview: string;
}

export interface Response {
  page: number;
  results: MovieItemComplete[];
  total_pages: number;
  total_results: number;
}
