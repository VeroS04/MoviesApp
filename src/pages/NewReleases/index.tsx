import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { GridMovies, Pager } from "../../components/common";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";
import { Loader } from "../../components/common/Loader";

const NewReleasesPage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
      movieServices.getUpcoming(currentPage).then(response => {
          setMovies(response)
          setTotalPages(response.total_pages);
        });
     }, [currentPage]);

     const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
    
    if (!movies.length) return <Loader />

  return (
    <Layout>
      <GridMovies
        movies={movies}
        text={"Upcoming Movies"}
        type={"slides"}
        container={"container-slides"}
        card={"card-slides-img"}
      />

      <Pager totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </Layout>
  );
};

export const NewReleases = withAuth(NewReleasesPage);
