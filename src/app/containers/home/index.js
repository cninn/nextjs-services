import React from "react";

import FeaturedMovie from "../../components/featured-movie";
import Categories from "../../components/categories";

import { MoviesSection } from "@/app/components/movies-section";

export default async function HomeContainer({
  topRatedMovies = [],
  popularMovies = [],
  selectedCategory,
  categories = [],
}) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies[Math.floor(Math.random() * topRatedMovies.length)]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              ?.name
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection
        title="Top rated Movies"
        movies={topRatedMovies.slice(0, 7)}
      />
      <MoviesSection
        title="Popular Movies"
        movies={popularMovies.slice(7, 14)}
      />
    </div>
  );
}
