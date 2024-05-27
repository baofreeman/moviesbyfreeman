"use client";

import { Movie } from "../../../type";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  movies: Movie[];
}

const HeroCarousel = ({ movies }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  console.log(movies);
  return (
    <div className="overflow-hidden cursor-pointer relative">
      <div className="flex">
        {movies.map((movie) => (
          <div>
            <p>ttitle</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
