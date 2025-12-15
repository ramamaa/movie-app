import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Play } from "lucide-react";
import React from "react";

export const TrailerDialog = ({
  youtubeKey,
}: {
  youtubeKey: string | undefined;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="absolute bottom-4 left-4 bg-transparent  text-white font-normal text-base leading-6 px-4 py-2 h-10 flex gap-3 items-center ">
          <div className="bg-white h-10 w-10 border border-white rounded-full flex justify-center items-center">
            <Play className="w-4 h-4 text-black" />
          </div>
          Play trailer
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[997px] max-h-[561px] mx-auto p-0 flex justify-center items-center border-0 bg-transparent">
        <DialogTitle className="hidden"></DialogTitle>
        <DialogHeader>
          <iframe
            className="mx-auto flex justify-center items-center"
            width="997"
            height="561"
            src={`https://www.youtube.com/embed/${youtubeKey}`}
            title="d4vd - “Remember Me” (from Arcane Season 2) [Official Visualizer]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
