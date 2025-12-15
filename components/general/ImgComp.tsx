import React from "react";
import Image from "next/image";

type ImgCompProps = {
  image: string;
};

export const ImgComp = ({ image }: ImgCompProps) => {
  return (
    <div className="relative w-full h-full">
      {image ? (
        <Image
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt=""
          fill
          unoptimized
          priority
        />
      ) : (
        <Image
          src={
            "https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?semt=ais_incoming&w=740&q=80"
          }
          alt=""
          fill
          unoptimized
          priority
        />
      )}
    </div>
  );
};
