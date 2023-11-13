import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import './style.scss';
import { IMG_URL } from "../../../constants";

type Props = {
  movies: Props[]
}

const BannerCarousel: FC<Props> = ({movies}) => {
  return (
    <Carousel className="mb-5 mt-3 container-carousel" fade>
      {movies?.map((movie: any) => (
        <Carousel.Item key={movie.id} className="carousel-item">
          <img
            className="d-block w-100 card-img-top"
            src={`${ IMG_URL + movie.backdrop_path }`}
            alt="First slide"/>
            <Carousel.Caption>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export { BannerCarousel };
