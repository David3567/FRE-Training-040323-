import { Movie } from 'src/app/model/Movie';
export interface ApiResponse {
  page?: number;
  results: Movie[];
  total_results?: number;
  total_pages?: number;
}
