import MoviesContainer from "@/components/shared/MoviesContainer";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";

interface Props {
  params: {
    term: string;
  };
}

const SearchPage = async ({ params: { term } }: Props) => {
  const termToUse = decodeURI(term);
  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();
  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold px-10 mb-5">Results for {termToUse}</h2>
      <MoviesContainer movies={movies} title="Searched Movies" isVertical />
      <MoviesContainer
        movies={popularMovies}
        title="You may also like"
        isVertical
      />
    </div>
  );
};

export default SearchPage;
