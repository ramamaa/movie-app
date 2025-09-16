import HomePage from "@/components/main/HomePage";
import { HomePageSkeleton } from "@/components/main/HomePageSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomePage />
    </Suspense>
  );
}
