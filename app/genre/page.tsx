import { MovieCard } from "@/components/my";
import { movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/utils/get-data";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type GenrePageProps = {
  searchParams: Promise<{ id: string; name: string; page: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const prams = await searchParams;
  const id = prams.id;
  const name = prams.name;
  const page = prams.page || "1";
  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );
  // genre?id=28&name=Action
  const currentUrl = `genre?id=${id}&name=${name}`;
  return (
    <div className="max-w-[1440px] mx-auto">
      <h2 className="text-foreground text-3xl font-semibold leading-9">
        {name}
      </h2>

      <div className="flex flex-wrap gap-12 my-8">
        {filteredMoviesResponse.results.slice(0, 10).map((movie) => (
          <MovieCard
            id={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
            key={movie.id}
            className=""
          />
        ))}
      </div>
      <Pagination className="mt-8 flex justify-end mr-20 h-10">
        <PaginationContent className="mr-20">
          <PaginationItem>
            <PaginationPrevious
              href={`${currentUrl}&page=${Number(page) - 1}`}
              aria-disabled={Number(page) <= 1}
              tabIndex={Number(page) <= 1 ? -1 : undefined}
              className={
                Number(page) <= 1 ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>
          {page !== "1" && (
            <>
              <PaginationItem>
                <PaginationLink href={`${currentUrl}&page=${Number(page) - 1}`}>
                  {Number(page) - 1}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          <PaginationItem>
            <PaginationLink isActive href="#">
              {page}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={`${currentUrl}&page=${Number(page) + 1}`}>
              {Number(page) + 1}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext href={`${currentUrl}&page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Genre;
