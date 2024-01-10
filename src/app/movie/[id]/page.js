import React from 'react'
import MovieContainer from '@/app/containers/movie';

import { notFound } from 'next/navigation';

import { getSingleMovie } from '../../../../services/movie';


async function MoviePage({params,searchParams}) {
  console.log(params.id);
   
    const movieDetail = await getSingleMovie(params.id);
    console.log(movieDetail);

    if(!movieDetail){
       notFound(); 
    }

  return (
    <MovieContainer movie={movieDetail}/>
  )
}
export default MoviePage;