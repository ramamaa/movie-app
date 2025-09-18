import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { movieResponseType } from "@/types";
import { getMoviesVideo } from "@/utils/get-data";
type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
};
const TrailerPopover = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const similarMovie: movieResponseType = await getMoviesVideo(id);
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Watch Trailer</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  );
};

export default TrailerPopover;
