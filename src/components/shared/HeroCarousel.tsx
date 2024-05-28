"use client";

import { Movie } from "../../../type";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";

interface Props {
  movies: Movie[];
}

const HeroCarousel = ({ movies }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  console.log(movies);
  return (
    <div className="overflow-hidden cursor-pointer relative" ref={emblaRef}>
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie?.id} className="flex-full min-w-0 relative">
            <Image
              src={getImagePath(movie?.backdrop_path, true)}
              alt={movie?.title}
              width={1980}
              height={1080}
            />
            <div className="hidden lg:inline absolute top-0 pt-40 xl:pt-72 left-0 bg-transparent z-20 w-full h-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-5 space-y-5 text-white">
              <h2 className="text-5xl font-bold max-w-xl">{movie?.title}</h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
            <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/100 via-gray-900/30 to-gray-300 dark:to-[#121212] z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
