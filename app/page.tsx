import { MovieCarousel } from "@/components/my";
import { MovieContainer } from "@/components/my/MovieContainer";

import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

export default async function Home() {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  console.log(upcomingMovies);

  return (
    <div>
      <MovieCarousel movies={nowPlayingMovies.results} />
      <MovieContainer movies={upcomingMovies.results} title="Upcoming" />
      <MovieContainer movies={popularMovies.results} title="Popular" />
      <MovieContainer movies={topRatedMovies.results} title="Top Rated" />
    </div>
  );
}
