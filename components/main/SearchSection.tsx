"use client";
import { movieResponseType } from "@/types";
import { getSearchedMovies } from "@/utils/get-data";

import React, { useState } from "react";

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );

  const handleChange = async (e) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await getSearchedMovies(value);
    setFoundMovies(foundData);
  };
  console.log(foundMovies, "found movies");
  return (
    <div>
      <input
        value={searchValue}
        onChange={handleChange}
        type="text"
        placeholder=" Search"
        className="text-muted-foreground border border-[#27272A] pl-9 w-[380px] radius rounded-lg"
      />

      <div>
        {foundMovies?.results.slice(0, 5).map((movie) => {
          return <div>{movie.title}</div>;
        })}
      </div>
    </div>
  );
};
