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
};

export const MovieCard = ({ title, score, image }: MovieCardProps) => {
  return (
    <Link href="/detail">
      <Card className="w-[230px] bg-secondary p-0 overflow-hidden gap-2">
        <CardContent className="p-0">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            alt=""
            width={230}
            height={340}
            unoptimized
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start p-2">
          <CardDescription className="flex gap-2">
            <Star color="#FDE047" />
            <p className="text-muted-foreground">
              <span className="text-foreground">{score}</span>/10
            </p>
          </CardDescription>
          <CardTitle>{title}</CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};
