"use client";
import { movieResponseType } from "@/types";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

import { getSearchedMovies } from "@/utils/get-data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

import React, { ChangeEvent, useState } from "react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOPen] = useState(false);
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await getSearchedMovies(value);
    if (value.length > 0) {
      setIsOPen(true);
    } else {
      setIsOPen(false);
    }
    setFoundMovies(foundData);
  };
  console.log(foundMovies, "found movies");
  return (
    <div className="z-10 h-9 ">
      <Input
        value={searchValue}
        onChange={handleChange}
        type="text"
        placeholder=" Search"
        className="text-muted-foreground border border-[#27272A] pl-9 w-[380px] h-9 radius rounded-lg py-2"
      />

      <div className="flex justify-center mt-2 ">
        <Popover open={true}>
          <PopoverTrigger className="flex flex-col items-center m-0 "></PopoverTrigger>
          <PopoverContent
            className={`flex flex-col justify-center bg-white dark:bg-[#09090B] border rounded-lg w-[577px] ${
              isOpen ? "" : "opacity-0"
            } `}>
            {foundMovies?.results.slice(0, 5).map((movie) => {
              return (
                <div key={movie.id} className="p-2 mx-3 mt-3">
                  <div className="w-[513px] h-[116px] flex gap-4">
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      width={67}
                      height={100}
                      unoptimized
                      alt=""
                      className="rounded-md"
                    />
                    <div className="flex flex-col gap-3 w-full">
                      <div className="flex flex-col">
                        <h1 className="leading-7 font-semibold text-xl">
                          {movie.title}
                        </h1>
                        <div className="flex gap-1 items-center">
                          <FaStar className="w-4 h-4" />{" "}
                          {movie.vote_average.toFixed(1)}
                          /10
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="leading-5 text-sm font-medium">
                          {movie.release_date.slice(0, 4)}
                        </span>
                        <Link
                          href={`/search?value=${searchValue}`}
                          className="flex items-center gap-1">
                          See more <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-2" />
                </div>
              );
            })}
            {isOpen && (
              <Link
                href={`/search?value=${searchValue}`}
                className="flex items-center justify-start px-2 py-3 mb-3 ml-3 font-medium text-sm leading-5 text-foreground">
                See all results for "
                {searchValue.charAt(0).toUpperCase() + searchValue.slice(1)}"
              </Link>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
