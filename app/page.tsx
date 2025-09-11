import { MovieCard, NowPlaying } from "@/components/my";
import { ArrowRight } from "lucide-react";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};

export default async function Home() {
  const getUpcomingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const upcomingMovies: movieResponseType = await getUpcomingMovies();
  return (
    <div>
      <NowPlaying />
      <div className="flex justify-between items-center mx-20 mt-13 mb-8">
        <span className="text-foreground text-2xl leading-8 font-semibold">
          Upcoming{" "}
        </span>
        <button className="text-foreground text-sm flex items-center gap-2 px-4 py-2 border rounded-md font-medium">
          See more
          <ArrowRight className="text-primary w-4 h-4" />
        </button>
      </div>
      <div className="flex gap-8 flex-wrap p-20">
        {upcomingMovies.results.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
