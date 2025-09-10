"use client";

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

export function NavigationMenuDemo() {
  const Genres = [
    { title: "Action" },
    { title: "Adventure" },
    { title: "Animation" },
    { title: "Biography" },
    { title: "Comedy" },
    { title: "Crime" },
    { title: "Documentary" },
    { title: "Drama" },
    { title: "Family" },
    { title: "Fantasy" },
    { title: "Film-Noir" },
    { title: "Game-Show" },
    { title: "History" },
    { title: "Horror" },
    { title: "Music" },
    { title: "Musical" },
    { title: "Mystery" },
    { title: "News" },
    { title: "Reality-TV" },
    { title: "Romance" },
    { title: "Sci-Fi" },
    { title: "Short" },
    { title: "Sport" },
    { title: "Talk-Show" },
    { title: "Thriller" },
    { title: "War" },
    { title: "Western" },
  ];
  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex flex-col items-start w-[577px] p-5">
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
            <ul className="flex items-start content-start gap-4 self-stretch flex-wrap">
              <ListItem href="">
                {Genres.map((item, index) => (
                  <Badge variant="outline" className="flex gap-2" key={index}>
                    <span className="text-foreground text-xs leading-4 font-semibold">
                      {item.title}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </Badge>
                ))}
              </ListItem>
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
