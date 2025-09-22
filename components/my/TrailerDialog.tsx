import { TrailerResponseType } from "@/types";
import { getMoviesVideo } from "@/utils/get-data";
import React from "react";
type TrailerDialogProps = {
  params: Promise<{ id: string | number }>;
};
export const TrailerDialog = async ({ params }: TrailerDialogProps) => {
  const trailerParams = await params;
  const id = trailerParams.id;
  const trailerData: TrailerResponseType = await getMoviesVideo(id);
  const trailer = trailerData.results.find((item) => item.type === "Trailer");
  console.log(trailerData, "trailerData");
  return (
    <div>
      <iframe
        width="997"
        height="561"
        src={`https://www.youtube.com/embed/${trailer?.key}`}
        title="d4vd - “Remember Me” (from Arcane Season 2) [Official Visualizer]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </div>
  );
};
