export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

export type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};

export type GenreType = {
  name: string;
  id: number;
};

export type genresResponseType = {
  genres: GenreType[];
};

export type movieDetailType = {
  genres: GenreType[];
  title: string;
  release_date: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  popularity: number;
  runtime: number;
};
