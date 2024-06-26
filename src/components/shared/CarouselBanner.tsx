import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";
import HeroCarousel from "./HeroCarousel";

interface Props {
  id?: string;
  keywords?: string;
}
const CarouselBanner = async ({ id, keywords }: Props) => {
  const movies = await getDiscoverMovies(id, keywords);
  return <HeroCarousel movies={movies} />;
};

export default CarouselBanner;
