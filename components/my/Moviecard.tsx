import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { upcomingMovies } from "@/lib/MockDatas";
import { Star } from "lucide-react";
import Image from "next/image";
type MovieCardProps = {
  title: string;
  score: number;
  poster_path: string;
};

export const MovieCard = ({ title, poster_path, score }: MovieCardProps) => {
  return (
    <div>
      {upcomingMovies.map((movie) => (
        <div key={movie.id}>
          <Card className="w-[230px] bg-secondary p-0 overflow-hidden gap-1 flex flex-col items-start text-foreground  mx-20">
            <CardContent className="p-0">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="{movie.title}"
                width={230}
                height={340}
                unoptimized
              />
              <CardFooter className="flex flex-col items-start self-stretch p-2 ">
                <CardDescription className=" flex gap-2 ">
                  <Star className="w-4 h-4 stroke-yellow-100 fill-[#FDE047]" />
                  <span className="text-foreground">{score}</span>/10
                </CardDescription>
                <CardTitle className="text-foreground leading-7 text-lg font-normal">
                  {movie.title}
                </CardTitle>
              </CardFooter>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};
