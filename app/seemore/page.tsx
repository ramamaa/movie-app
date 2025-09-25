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
  searchParams: Promise<{ name: string; title: string; page: string }>;
};

const SeeMore = async ({ searchParams }: SearchPageProps) => {
  const prams = await searchParams;
  const listName = prams.name;
  const title = prams.title;
  const page = prams.page || "1";
  const filteredMoviesResponse: movieResponseType = await getMoviesList(
    listName,
    page
  );
  //moreLike?id=129

  const currentUrl = `/seemore?name=${listName}&title=${title}`;

  return (
    <div className="max-w-[1440px] mx-auto">
      <h2 className="text-foreground text-3xl font-semibold leading-9 ml-20">
        {title}
      </h2>

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

export default SeeMore;
