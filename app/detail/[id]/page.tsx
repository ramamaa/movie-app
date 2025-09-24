import {
  movieDetailActorsType,
  movieDetailType,
  movieResponseType,
  TrailerResponseType,
} from "@/types";
import {
  getMovieDetail,
  getMovieDetailActors,
  getMoviesVideo,
  getSimilarMovie,
} from "@/utils/get-data";
import { ChevronRight, CirclePlay, Play, Star } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MovieCard, MovieContainer } from "@/components/my";
import { TrailerDialog } from "@/components/my/TrailerDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
};
const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetailResponse: movieDetailType = await getMovieDetail(id);
  const similarMovie: movieResponseType = await getSimilarMovie(id);
  const trailerData: TrailerResponseType = await getMoviesVideo(id);
  const trailer = trailerData.results.find((item) => item.type === "Trailer");
  const movieCreditsResponse: movieDetailActorsType =
    await getMovieDetailActors(id);
  console.log(trailerData, "Trailer Detail");
  return (
    <div className="max-w-[1080px] mx-auto mt-13 mb-[113px] flex flex-col">
      <div className="flex flex-wrap justify-between  ">
        <div className="flex flex-col gap-2">
          <div className="text-foreground font-bold text-4xl leading-10 self-stretch ">
            <h1>{movieDetailResponse.title}</h1>
          </div>
          <div className="flex gap-2 leading-7 text-lg text-foreground font-normal">
            <span>{movieDetailResponse.release_date}</span>
            {/* <span>{movieDetailResponse.adult}</span> */}
            <span>{movieDetailResponse.runtime}m</span>
          </div>
        </div>
        <div>
          <p>Rating</p>
          <div className="flex gap-1 items-center">
            <Star className="fill-yellow-100  w-5.5 h-5.5 shrink-0 " />
            <div>
              <span className="text-foreground font-normal text-base flex">
                {movieDetailResponse.vote_average.toFixed(1)}
                <p className="text-muted-foreground">/10</p>
              </span>
              <p className="text-muted-foreground text-xs leading-4 text-center">
                {movieDetailResponse.popularity.toFixed(1)}k
              </p>
            </div>
          </div>
        </div>
        <div className="flex  gap-8 my-6 mx-auto w-[100%] h-[100%] max-w-[1080px] max-h-[428px]">
          {/* Poster (2:3 ratio) */}
          <div className="aspect-[2/3] w-[100%] max-w-[200px] md:max-w-[290px] overflow-hidden rounded-sm relative">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movieDetailResponse.poster_path}`}
              alt="Poster"
              fill
              className="object-cover "
              unoptimized
              sizes="(max-width: 200px) 100vw, (max-width: 290px) 50vw, 33vw"
            />
          </div>

          {/* Backdrop (4:3 ratio) */}
          <div className="aspect-[4/3] w-[100%] max-w-[1080px] overflow-hidden rounded-sm relative">
            <Image
              src={`https://image.tmdb.org/t/p/original/${movieDetailResponse.backdrop_path}`}
              alt="Backdrop"
              className="object-cover "
              unoptimized
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1080px) 50vw, 33vw"
            />
            <Dialog>
              <DialogTrigger asChild>
                <button className="absolute bottom-4 left-4 bg-transparent  text-white font-normal text-base leading-6 px-4 py-2 h-10 flex gap-3 items-center ">
                  <div className="bg-white h-10 w-10 border border-white rounded-full flex justify-center items-center">
                    <Play className="w-4 h-4 text-black" />
                  </div>
                  Play trailer
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[997px] max-h-[561px] mx-auto p-0 flex justify-center items-center border-0 bg-transparent">
                <DialogTitle className="hidden"></DialogTitle>
                <DialogHeader>
                  <iframe
                    className="mx-auto flex justify-center items-center"
                    width="997"
                    height="561"
                    src={`https://www.youtube.com/embed/${trailer?.key}`}
                    title="d4vd - “Remember Me” (from Arcane Season 2) [Official Visualizer]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-foreground font-semibold text-xs leading-4 flex flex-wrap gap-3">
            {movieDetailResponse.genres.map((genre) => (
              <Badge
                variant="outline"
                className="flex gap-2 cursor-pointer"
                key={genre.id}
              >
                <p>{genre.name}</p>
              </Badge>
            ))}
          </div>
          <div className="text-foreground font-normal text-base leading-6">
            <p>{movieDetailResponse.overview};</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-start">
            <div className="flex gap-13 ">
              <p className="leading-7 text-base font-bold text-foreground">
                Director
              </p>
              <div className="leading-6 text-base font-normal text-foreground ">
                {movieCreditsResponse.crew
                  .filter((member) => member.job === "Director")
                  .map((director) => (
                    <p key={director.credit_id}>{director.name}</p>
                  ))}
              </div>
            </div>
            <Separator className="w-[1080px] border-[#27272A] " />
          </div>
          <div className="flex flex-col gap-1 justify-center items-start">
            <div className="flex gap-13 ">
              <p className="leading-7 text-base font-bold text-foreground">
                Writers
              </p>
              <div className="leading-6 text-base font-normal text-foreground flex gap-3">
                {movieCreditsResponse.crew
                  .filter((member) => member.department === "Writing")
                  .map((director) => (
                    <p key={director.credit_id}>{director.name}</p>
                  ))}
              </div>
            </div>
            <Separator className="w-[1080px] border-[#27272A] " />
          </div>
          <div className="flex flex-col gap-1 justify-center items-start">
            <div className="flex gap-13 ">
              <p className="leading-7 text-base font-bold text-foreground">
                Stars
              </p>
              <div className="leading-6 text-base font-normal text-foreground flex gap-3">
                {movieCreditsResponse.cast.slice(0, 3).map((actor) => (
                  <p key={actor.credit_id}>{actor.name} ·</p>
                ))}
              </div>
            </div>
            <Separator className="w-[1080px] border-[#27272A] " />
          </div>
          <div className="flex justify-between">
            <span className="text-2xl font-semibold leading-8">
              More like this
            </span>
            <a
              className="flex gap-2 text-sm text-foreground font-medium items-center px-4 leading-9"
              href="/"
            >
              See more <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex flex-wrap gap-8 items-stretch">
            {similarMovie.results.slice(0, 5).map((movie) => (
              <MovieCard
                title={movie.title}
                score={movie.vote_average}
                image={movie.poster_path}
                id={movie.id}
                key={movie.id}
                className="w-[190px] "
              ></MovieCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDynamicPage;
