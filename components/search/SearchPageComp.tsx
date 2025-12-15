import React from "react";
import Link from "next/link";

import { movieResponseType, genresResponseType } from "@/types";
import { getMoviesBySearch, getGenresList } from "@/utils/get-data";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { MedMovieCard } from "../general/MedMovieCard";
import { NoResultsMsgComp } from "../general/NoResultsMsgComp";
import { PaginationComp } from "../general/PaginationComp";
import { SearchListCard } from "./SearchListCard";

type SearchPageCompProps = {
  searchParams: Promise<{
    value: string;
    genreId: string;
    page: string;
  }>;
};
export const SearchPageComp = async ({ searchParams }: SearchPageCompProps) => {
  const movieGenresList: genresResponseType = await getGenresList();
  const { value, genreId, page = "1" } = await searchParams;
  const searchedMovies: movieResponseType = await getMoviesBySearch(
    value,
    page
  );
  const filteredMovies = genreId
    ? searchedMovies.results.filter((movie) =>
        movie.genre_ids.includes(Number(genreId))
      )
    : searchedMovies.results;
  const url = `/search?value=${value}&`;

  const totalPages =
    genreId && filteredMovies && filteredMovies.length < 20
      ? 1
      : searchedMovies && searchedMovies.total_pages
      ? searchedMovies.total_pages
      : 1;

  let resultNumber = 0;
  if (genreId && filteredMovies) {
    resultNumber = filteredMovies.length;
  } else if (searchedMovies && searchedMovies.results) {
    resultNumber = searchedMovies.total_results;
  }

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="sm:w-[1440px] w-full sm:px-20 px-5 flex flex-col gap-8 sm:mt-13 sm:mb-[344px] my-8">
        <h2 className="w-full sm:text-3xl text-2xl sm:leading-9 leading-8 font-semibold text-foreground">
          Search results
        </h2>
        <div className="sm:block hidden">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel collapsible>
              <div className="flex flex-col gap-8">
                <h4 className="text-xl leading-7 font-semibold text-foreground">
                  {resultNumber.toLocaleString("en")} results for "{value}"{" "}
                  {genreId &&
                    movieGenresList.genres
                      .filter((genre) => genre.id === Number(genreId))
                      .map((el) => <span key={el.id}>in {el.name}</span>)}
                </h4>
                {resultNumber > 0 && totalPages !== 0 ? (
                  <div className="flex flex-wrap gap-y-8 gap-x-12">
                    {filteredMovies.slice(0, 18).map((movSearched) => (
                      <Link
                        key={movSearched.id}
                        href={`/details/${movSearched.id}`}>
                        <MedMovieCard
                          title={movSearched.title}
                          score={movSearched.vote_average}
                          image={movSearched.poster_path}
                        />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <NoResultsMsgComp />
                )}
                <PaginationComp url={url} page={page} totalPages={totalPages} />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle className="mx-11" />
            <ResizablePanel>
              <SearchListCard searchValue={value} genreId={genreId} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
};
