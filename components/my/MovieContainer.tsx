import { MovieType } from "../../types";
import { MovieCard } from "./Moviecard";
type MovieContainerProps = {
  movies: MovieType[];
  title: string;
};

export const MovieContainer = ({ movies, title }: MovieContainerProps) => {
  return (
    <div>
      <div className="text-foreground text-2xl font-semibold leading-8 pl-20 mt-13">
        {title}
      </div>
      <div className="flex gap-8 flex-wrap px-20 mt-9">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard
            id={movie.id}
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
            className=""
          />
        ))}
      </div>
    </div>
  );
};
