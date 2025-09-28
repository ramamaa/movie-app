import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { getMovieGenres } from "@/utils/get-data";
import { genresResponseType } from "@/types";

export async function NavigationMenuDemo() {
  const genresResponse: genresResponseType = await getMovieGenres();
  console.log(genresResponse, "RESPONSE");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" w-[577px] p-5 flex items-start content-start gap-4 self-stretch flex-wrap">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link className="" href="/">
                    <div className="text-foreground text-2xl leading-8 font-semibold">
                      Genres
                    </div>
                    <p className="text-foreground text-base leading-6 font-normal">
                      See lists of movies by genre
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </div>
            <Separator className="w-[537px] px-5" />
            <ul className="flex items-start content-start gap-4 self-stretch flex-wrap w-[537px] p-5">
              {genresResponse.genres.map((genre) => (
                <li key={genre.id}>
                  <NavigationMenuLink asChild>
                    <Link href={`/genre?id=${genre.id}&name=${genre.name}`}>
                      <Badge
                        variant="outline"
                        className="flex gap-2 cursor-pointer">
                        <span className="text-foreground text-xs leading-4 font-semibold">
                          {genre.name}
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </Badge>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
