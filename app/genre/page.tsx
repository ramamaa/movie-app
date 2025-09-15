import { MovieCard } from "@/components/my";
import { movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/utils/get-data";
import React from "react";
type GenrePageProps = {
  searchParams: Promise<{ id: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const prams = await searchParams;
  const id = prams.id;
  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id
  );
  console.log("data", filteredMoviesResponse);
  return (
    <div className="mt-13 px-20">
      <div>{Genre.name}</div>
      <div className="flex flex-wrap gap-12 my-8">
        {filteredMoviesResponse.results.slice(0, 10).map((movie) => (
          <MovieCard
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Genre;
