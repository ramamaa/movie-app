import { ChevronRight } from "lucide-react";
import { MovieType } from "../../types";
import { MovieCard } from "./Moviecard";
import Link from "next/link";
type MovieContainerProps = {
  movies: MovieType[];
  title: string;
  listName: string;
};

export const MovieContainer = ({
  movies,
  title,
  listName,
}: MovieContainerProps) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-foreground text-2xl font-semibold leading-8 pl-20 mt-13">
          {title}
        </div>
        <Link href={`/seemore?name=${listName}&title=${title}`}>
          <span className="mt-13 pr-20 leading-5 text-sm font-medium flex gap-1 items-center">
            See more <ChevronRight className="w-4 h-4" />
          </span>
        </Link>
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
