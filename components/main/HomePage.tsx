import { MovieCarousel } from "@/components/my";
import { MovieContainer } from "@/components/my/MovieContainer";

import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

export default async function HomePage() {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  return (
    <div className=" max-w-[1440px] mx-auto">
      <MovieCarousel movies={nowPlayingMovies.results} />
      <MovieContainer
        movies={upcomingMovies.results}
        title="Upcoming"
        listName="upcoming"
      />
      <MovieContainer
        movies={popularMovies.results}
        title="Popular"
        listName="popular"
      />
      <MovieContainer
        movies={topRatedMovies.results}
        title="Top Rated"
        listName="top_rated"
      />
    </div>
  );
}
