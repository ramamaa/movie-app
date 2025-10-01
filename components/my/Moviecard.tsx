import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";

import Link from "next/link";
import { Star } from "lucide-react";

type MovieCardProps = {
  title: string;
  score: number;
  image: string;
  id: number;
  className: string;
};

export const MovieCard = ({
  title,
  score,
  image,
  id,
  className,
}: MovieCardProps) => {
  return (
    <div className="mx-auto">
      <Link href={`/detail/${id}`}>
        <Card
          className={`w-[230px] bg-secondary p-0 overflow-hidden radius rounded-lg gap-2  ${className}`}
        >
          <CardContent className="p-0 aspect-[2/3]">
            <div className="size-full rounded-t-lg relative">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${image}`}
                alt="Poster"
                fill
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch p-2 ">
            <CardDescription className="flex gap-2">
              <Star color="#FDE047" className="w-4 h-4" />
              <p className="text-muted-foreground">
                <span className="text-foreground">{score.toFixed(1)}</span>/10
              </p>
            </CardDescription>
            <CardTitle>{title}</CardTitle>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};
