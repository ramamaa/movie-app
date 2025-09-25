import { MovieCard } from "@/components/my/Moviecard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { movieResponseType } from "@/types";
import { getSimilarMovie } from "@/utils/get-data";
import React from "react";
type MoreLikeProps = {
  searchParams: Promise<{ id: string; page: string }>;
};
const MoreLike = async ({ searchParams }: MoreLikeProps) => {
  const params = await searchParams;
  const id = params.id;

  const page = params.page || "1";
  const filteredMoviesResponse: movieResponseType = await getSimilarMovie(
    id,
    page
  );
  // genre?id=28&name=Action
  const currentUrl = `moreLike?id=${id}`;
  return (
    <div className="max-w-[1440px] mx-auto">
      <h2 className="text-foreground text-3xl font-semibold leading-9">
        More Like This
      </h2>

      <div className="flex flex-wrap gap-12 my-8 ">
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

export default MoreLike;
