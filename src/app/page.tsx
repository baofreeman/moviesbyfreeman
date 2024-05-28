import CarouselBanner from "@/components/shared/CarouselBanner";
import MoviesContainer from "@/components/shared/MoviesContainer";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const nowplayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-24">
      <CarouselBanner />
      <div className="w-full flex flex-col space-y-2">
        <MoviesContainer
          movies={nowplayingMovies}
          title="Now Playing"
          isVertical={false}
        />
        <MoviesContainer
          movies={upcomingMovies}
          title="Upcoming"
          isVertical={false}
        />
        <MoviesContainer
          movies={topRatedMovies}
          title="Top Rated"
          isVertical={false}
        />
        <MoviesContainer
          movies={popularMovies}
          title="Popular Movies"
          isVertical={false}
        />
      </div>
    </main>
  );
}
