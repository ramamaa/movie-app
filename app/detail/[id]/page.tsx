import { movieDetailType, movieResponseType } from "@/types";
import { getMovieDetail } from "@/utils/get-data";
import React from "react";
type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
};
const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetailResponse: movieDetailType = await getMovieDetail(id);
  console.log("data", movieDetailResponse);
  return (
    <div>
      <div>
        <h1>{movieDetailResponse.title}</h1>
      </div>
      <div className="flex gap-2">
        <span>{movieDetailResponse.release_date}</span>
        {/* <span>{movieDetailResponse.adult}</span> */}
        <span>{movieDetailResponse.runtime}m</span>
      </div>
    </div>
  );
};

export default DetailDynamicPage;
