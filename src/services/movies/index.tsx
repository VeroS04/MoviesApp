import { endpoints } from "../../constants";
import { apiMovies } from "../../utils";
 
const getPopular = async (page?: number) => {
  const response = await apiMovies.get(
    endpoints.POPULAR_MOVIE,
    {
      params: {
        page: page,
      },
    }
    );
  return response.data.results;
};

const getUpcoming = async (page?: number) => {
  const response = await apiMovies.get(
    endpoints.UPCOMING_MOVIE,
    {
      params: {
        page: page,
      },
    }
    );
  return response.data.results;
};

const getTop = async () => {
  const response = await apiMovies.get(endpoints.TOP_MOVIE);
  return response.data.results;
};

const searchMovie = async ( title: string | null, page: string | null = '1') => {
  const response = await apiMovies.get(endpoints.SEARCH_MOVIE,
    {
      params: {
        query:title,
        page: page
      },
    }
    )
  return response.data ;
};

const getDetails = async (id: string) => {
  const response = await apiMovies.get(`/movie/${id}`);
  return response.data;
};

const getTrailer = async (id: string) => {
  const response = await apiMovies.get(`/movie/${id}/videos`);
  return response.data;
};

export const movieServices = { getPopular, getTop, getUpcoming, searchMovie, getDetails, getTrailer }
