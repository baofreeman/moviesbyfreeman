import MoviesContainer from "@/components/shared/MoviesContainer";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

interface Props {
  searchParams: {
    title: string;
  };
}

const ViewmorePage = async ({ searchParams: { title } }: Props) => {
  let movies: any = null;
  if (title === "Now Playing") {
    movies = await getNowPlayingMovies();
  } else if (title === "Upcoming") {
    movies = await getUpcomingMovies();
  } else if (title === "Top Rated") {
    movies = await getTopRatedMovies();
  } else if (title === "Popular Movies") {
    movies = await getPopularMovies();
  }
  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold px-10 mb-5">{title}</h2>
      <MoviesContainer movies={movies} isVertical />
    </div>
  );
};

export default ViewmorePage;
