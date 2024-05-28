import { Movie } from "../../../type";

interface Props {
  title: string;
  movies: Movie[];
  isVertical: boolean;
}

const MoviesContainer = ({ title, movies, isVertical }: Props) => {
  return (
    <div>
      <div className="mx-10 py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4">
        <h2>MoviesContainer</h2>
      </div>
    </div>
  );
};

export default MoviesContainer;
