import { MovieCard, MovieContainer } from "@/components/my";
import { genresResponseType, GenreType, movieResponseType } from "@/types";
import {
  getMovieGenres,
  getMoviesByGenreId,
  getMoviesList,
} from "@/utils/get-data";
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

type SearchPageProps = {
  searchParams: Promise<{ name: string; title: string }>;
};

const SeeMore = async ({ searchParams }: SearchPageProps) => {
  const prams = await searchParams;
  const listName = prams.name;
  const title = prams.title;
  const filteredMoviesResponse: movieResponseType = await getMoviesList(
    listName
  );
  console.log("filter", filteredMoviesResponse);

  // const genresResponse: genresResponseType = await getMovieGenres();

  return (
    <div className="max-w-[1440px] mx-auto">
      <h2 className="text-foreground text-3xl font-semibold leading-9 ml-20">
        {title}
      </h2>

      {/* <div className="flex flex-wrap gap-12 my-8">
        <MovieContainer
          movies={filteredMoviesResponse.results}
          title={title}
          listName={listName}
        />
      </div> */}
      <div className="flex gap-8 flex-wrap px-20 mt-9">
        {filteredMoviesResponse.results.slice(0, 10).map((movie) => (
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
      <Pagination className="mt-8 flex justify-end mr-20 h-10">
        <PaginationContent className="mr-20">
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

export default SeeMore;
