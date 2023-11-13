import { Layout } from "../../components";
import { GridMovies } from "../../components/common";
import { BannerCarousel } from "../../components/common/banner-carrousell";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";
import { useEffect, useState } from "react";

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
    movieServices.getUpcoming().then(response => setMovies(response.splice(0, 5)))
    movieServices.getPopular().then(response => setPopular(response))
    movieServices.getTop().then(response => setTop(response))
 }, []);
   
  return (
    <Layout>
      <BannerCarousel movies={movies} />
      <GridMovies movies={popular} text={"Populares"} type={"grid"} container={"container-grid"} card={"card-grid-img"} />
      <GridMovies movies={top} text={"Top Movies"} type={"grid"} container={"container-grid"} card={"card-grid-img"} />
    </Layout>
  );
};

export const Home = withAuth(HomePage);
