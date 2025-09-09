import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
type MovieCardProps = {
  title: string;
  score: number;
  image: string;
};

export const MovieCard = ({ title, image, score }: MovieCardProps) => {
  return (
    <div>
      <Card className="w-[230px] bg-secondary p-0 overflow-hidden gap-1 flex flex-col items-start text-foreground  mx-20">
        <CardContent className="p-0">
          <Image src={image} alt="" width={230} height={340} unoptimized />
          <CardFooter className="flex flex-col items-start self-stretch p-2 ">
            <CardDescription className=" flex gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none">
                <path
                  d="M7.99967 1.33337L10.0597 5.50671L14.6663 6.18004L11.333 9.42671L12.1197 14.0134L7.99967 11.8467L3.87967 14.0134L4.66634 9.42671L1.33301 6.18004L5.93967 5.50671L7.99967 1.33337Z"
                  fill="#FDE047"
                  stroke="#FDE047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-foreground">{score}</span>/10
            </CardDescription>
            <CardTitle className="text-foreground leading-7 text-lg font-normal">
              {title}
            </CardTitle>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};
