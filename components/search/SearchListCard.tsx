import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { getGenresList } from "@/utils/get-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { genresResponseType } from "@/types";
import { Badge } from "../ui/badge";

type SearchListCardProps = {
  searchValue: string;
  genreId: string;
};

export const SearchListCard = async ({
  searchValue,
  genreId,
}: SearchListCardProps) => {
  const movieGenresList: genresResponseType = await getGenresList();

  return (
    <Card className="p-0 border-none shadow-none flex gap-5 bg-background">
      <CardHeader className="p-0 gap-1">
        <CardTitle className="sm:text-2xl text-xl sm:leading-8 leading-7 font-semibold text-foreground">
          Search by genre
        </CardTitle>
        <CardDescription className="text-base leading-6 text-foreground">
          See lists of movies by genre
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 flex flex-wrap gap-4">
        {movieGenresList.genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/search?value=${searchValue}&genreId=${genre.id}`}>
            <Badge
              variant="outline"
              className={`font-semibold rounded-full pl-2.5 gap-2 pr-1 text-center ${
                genre.id === Number(genreId) &&
                "bg-primary text-primary-foreground"
              }`}>
              {genre.name}
              <FaChevronRight size={16} color="foreground" />
            </Badge>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};
