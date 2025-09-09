"use client";

import * as React from "react";
import { Play } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function NowPlaying() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const Images = [
    {
      image: "https://static.digit.in/Alice-in-Borderland-Season-3-1.png",
      score: 6.9,
      title: "Alice in Borderland",
      desc: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    },
    {
      image:
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/04/dandadan-evil-eye-poster-cropped.jpg?q=49&fit=crop&w=750&h=422&dpr=2",
      score: 7.9,
      title: "Dandadan",
      desc: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    },

    {
      image:
        "https://static.beebom.com/wp-content/uploads/2024/04/One-Piece-live-action-season-2-poster.jpg?w=1200&quality=75",
      score: 8.9,
      title: "One Piece",
      desc: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-[1440px] h-[600px] flex self-stretch"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Images.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="p-0 border-0 rounded-none">
                <CardContent
                  className="flex items-center justify-center w-[1440px] h-[600px] rounded-xl bg-cover bg-center relative "
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="flex flex-col gap-4 w-101 absolute left-[140px] bottom-[158px]">
                    <div>
                      <span className="text-white leading-6 font-normal text-base">
                        Now Playing:
                      </span>
                      <h1 className="text-white text-4xl font-bold leading-10">
                        {item.title}
                      </h1>
                      <span className="text-white">⭐️ {item.score}/10</span>
                    </div>
                    <div className="text-white text-xs font-normal leading-4">
                      {item.desc}
                    </div>
                    <button className="bg-[#F4F4F5] border rounded-md h-10 px-4 py-2 w-[145px] flex gap-2 justify-center items-center">
                      <Play className="w-4 h-4" />
                      <span className="text-secondary-foreground leading-5 text-sm">
                        Watch Trailer
                      </span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-14" />
      <CarouselNext className="right-14" />
    </Carousel>
  );
}
