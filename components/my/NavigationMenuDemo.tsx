import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { getMovieGenres } from "@/utils/get-data";
import { genresResponseType } from "@/types";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export async function NavigationMenuDemo() {
  const genresResponse: genresResponseType = await getMovieGenres();
  console.log(genresResponse, "RESPONSE");

  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" w-[577px] p-5 flex items-start content-start gap-4 self-stretch flex-wrap">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <a className="" href="/">
                    <div className="text-foreground text-2xl leading-8 font-semibold">
                      Genres
                    </div>
                    <p className="text-foreground text-base leading-6 font-normal">
                      See lists of movies by genre
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
            <Separator className="w-[537px] px-5" />
            <ul className="flex items-start content-start gap-4 self-stretch flex-wrap w-[537px] p-5">
              {genresResponse.genres.map((genre) => (
                <li key={genre.id}>
                  <NavigationMenuLink asChild>
                    <Link href={`/genre?id=${genre.id}`}>
                      <Badge
                        variant="outline"
                        className="flex gap-2 cursor-pointer"
                      >
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

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
function getMoviesGenres() {
  throw new Error("Function not implemented.");
}
