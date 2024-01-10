
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

const options = {
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
};

const fetchMovieApi = async(pathname,query='') =>{

    try {
        const res = await fetch(
            `${API_URL}${pathname}${API_KEY}&${query}`,
            options
          );
          return res.json();
    } catch (error) {
        throw new Error(error);
    }
  
}

const getSingleCategory = async (id) => {
    
    return fetchMovieApi("/discover/movie?", `with_genres=${id}`);
  };
  
  const getCategories = async () => {
    return fetchMovieApi("/genre/movie/list?");
  };
  
  const getTopRatedMovies = async () => {
    return fetchMovieApi("/movie/top_rated?");
  };
  const getPopularMovies = async () => {
    return fetchMovieApi("/movie/popular?");
  };

  const getSingleMovie = async (id) => {
    console.log('SERVİCES İD',id)
    return fetchMovieApi(`/movie/${id}?`);
  
  }

export {fetchMovieApi, getSingleCategory, getCategories, getTopRatedMovies, getPopularMovies, getSingleMovie}