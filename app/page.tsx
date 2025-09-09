import { MovieCard, NowPlaying, Header } from "@/components/my";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <div>
      <Header />
      <NowPlaying />
      <div className="flex justify-between items-center mx-20 mt-13 mb-8">
        <span className="text-foreground text-2xl leading-8 font-semibold">
          Upcoming{" "}
        </span>
        <button className="text-foreground text-sm flex items-center gap-2 px-4 py-2 border rounded-md font-medium">
          See more
          <ArrowRight className="text-primary w-4 h-4" />
        </button>
      </div>
      <MovieCard
        title="Dark Knight"
        image="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"
        score={9.9}></MovieCard>
    </div>
  );
}
