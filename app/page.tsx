import { MovieCard } from "@/components/my/Moviecard";
export default function Home() {
  return (
    <div>
      <MovieCard
        title="Dark Knight"
        image="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"
        score={9.9}
      ></MovieCard>
    </div>
  );
}
