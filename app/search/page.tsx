import { SearchPageComp } from "@/components/search/SearchPageComp";
import React, { Suspense } from "react";

type SearchPageProps = {
  searchParams: Promise<{
    value: string;
    genreId: string;
    page: string;
  }>;
};

export const generateMetadata = async ({ searchParams }: SearchPageProps) => {
  const { value } = await searchParams;

  return {
    title: `MovieZ | Search Results for "${value}"`,
  };
};

const SearchPage = ({ searchParams }: SearchPageProps) => {
  return <SearchPageComp searchParams={searchParams} />;
};
export default SearchPage;
