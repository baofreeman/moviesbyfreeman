import CarouselBanner from "@/components/shared/CarouselBanner";
import MoviesContainer from "@/components/shared/MoviesContainer";
import { getNowPlayingMovies } from "@/lib/getMovies";

export default async function Home() {
  const nowplayingMovies = await getNowPlayingMovies();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CarouselBanner />
      <div className="flex flex-col space-y-2">
        <MoviesContainer
          movies={nowplayingMovies}
          title="Now Playing"
          isVertical={false}
        />
      </div>
    </main>
  );
}
