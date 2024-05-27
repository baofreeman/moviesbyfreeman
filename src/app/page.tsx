import CarouselBanner from "@/components/shared/CarouselBanner";
import { getNowPlayingMovies } from "@/lib/getMovies";

export default async function Home() {
  const nowplayingMovies = await getNowPlayingMovies();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CarouselBanner />
    </main>
  );
}
