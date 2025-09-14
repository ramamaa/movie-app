"use client";
import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType } from "@/types";
import { Play } from "lucide-react";

type MovieCarouselProps = {
  movies: MovieType[];
};

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  //  Autoplay plugin
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) return;

    // Update current slide on select
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Clean up on unmount
    return () => autoplay.current?.destroy();
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} plugins={[autoplay.current]} className="">
        <CarouselContent>
          {movies.slice(0, 3).map((movie, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="relative flex aspect-video max-h-[600px] items-center justify-center p-0">
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt={movie.title}
                      width={1440}
                      height={600}
                      className="w-full h-full object-cover rounded-lg"
                      priority={index === 0}
                      unoptimized
                    />

                    {/* overlay */}
                    <div className="flex flex-col gap-4 w-101 absolute left-[140px] bottom-[158px]">
                      <div>
                        <span className="text-white leading-6 font-normal text-base">
                          Now Playing:
                        </span>
                        <h1 className="text-white text-4xl font-bold leading-10">
                          {movie.title}
                        </h1>
                        <span className="text-white">
                          ⭐️ {movie.vote_average}/10
                        </span>
                      </div>
                      <div className="text-white text-xs font-normal leading-4 max-w-[500px]">
                        {movie.overview}
                      </div>
                      <button className="bg-[#F4F4F5] border rounded-md h-10 px-4 py-2 w-[145px] flex gap-2 justify-center items-center">
                        <Play className="w-4 h-4 text-black" />
                        <span className="text-black leading-5 text-sm">
                          Watch Trailer
                        </span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>

      {/* indicators */}
      <div className="flex gap-2 justify-center mt-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`rounded-full size-4 cursor-pointer ${
              index + 1 === current ? "bg-white" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </>
  );
}
