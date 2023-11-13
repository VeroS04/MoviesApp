import { Layout } from "../../components";
import { useState, useEffect } from "react";
import { movieServices } from "../../services/movies";
import { GridMovies, Pager } from "../../components/common";
import { withAuth } from "../../hoc";

const PopularPage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    movieServices.getPopular(currentPage).then(response => {
      setMovies(response)
      setTotalPages(response.total_pages);
      });
    }, [currentPage]);

     const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <GridMovies movies={movies} text={"Popular Movies"} type={"slides"} container={"container-slides"} card={"card-slides-img"} />
      <Pager totalPages={totalPages} currentPage={Number(currentPage)} onPageChange={handlePageChange} />
    </Layout>
  );
};

export const Popular = withAuth(PopularPage)