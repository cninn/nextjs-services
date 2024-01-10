import React from 'react'
import CategoriesLoading from '../components/categories/loading';
import FeaturedLoading from '../components/featured-movie/loading';
import MovieLoading from '../components/movies-section/loading';
export default function Loading() {
  return (
    <div>
      <FeaturedLoading/>
      <CategoriesLoading />
      <MovieLoading/>
      <MovieLoading/>
      <MovieLoading/>

    </div>
  )
}
