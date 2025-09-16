import { MovieCard } from "@/components/my";
import { genresResponseType, movieResponseType } from "@/types";
import { getMovieGenres, getMoviesByGenreId } from "@/utils/get-data";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

type GenrePageProps = {
  searchParams: Promise<{ id: string; name: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const prams = await searchParams;
  const id = prams.id;
  const name = prams.name;
  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id
  );
  // const genresResponse: genresResponseType = await getMovieGenres();
  console.log("data", filteredMoviesResponse);
  return (
    <div className="mt-13 px-20">
      <h2 className="text-foreground text-3xl font-semibold leading-9">
        {name}
      </h2>
      <div className="flex flex-wrap">
        {/* <div>
          <h3>Genres</h3>
          <span>See lists of movies by genre</span>
          {genresResponse.genres.map((genre) => (
            <Badge
              variant="outline"
              className="flex gap-2 cursor-pointer"
              key={genre.id}
            >
              <span className="text-foreground text-xs leading-4 font-semibold">
                {genre.name}
              </span>
              <ChevronRight className="w-4 h-4" />
            </Badge>
          ))}
        </div>
        <Separator orientation="vertical" className="h-6" /> */}
        <div className="flex flex-wrap gap-12 my-8">
          {filteredMoviesResponse.results.map((movie) => (
            <MovieCard
              id={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
              key={movie.id}
            />
          ))}
        </div>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Genre;
