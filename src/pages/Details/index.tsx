import { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { Calendar, StarFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { Layout } from "../../components";
import { IMG_URL } from "../../constants";
import { withAuth } from "../../hoc";
import { MovieDetail, video } from "../../types";
import { movieServices } from "../../services/movies";
import "./style.scss";


const DetailsPage = () => {
  const [details, setDetails] = useState<MovieDetail>();
  const [trailer, setTrailer] = useState<video>();
  const [show, setShow] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      movieServices.getDetails(id).then((data) => setDetails(data));
      movieServices.getTrailer(id).then((data) => setTrailer(data));
    }
  }, []);

  return (
    <Layout>
      {details && (
        <Container className="details" fluid>
          <img className="poster" src={`${IMG_URL}${details.poster_path}`} />
          <div className="box-details-background">
            <div className="img-box">
              <img
              className="img-poster"
                src={
                  details.backdrop_path
                    ? `${IMG_URL}${details.backdrop_path}`
                    : "/img/posters-de-peliculas.png"
                }
              />
              <div className="box-details">
                <h2>{details.title}</h2>
                <div className="detail-top">
                  <span>
                    <StarFill /> {details.vote_average.toFixed(1)}
                  </span>
                  <span className="fw-bold fs-5 p-1">
                    <Calendar /> {details.release_date.slice(0, 4)}
                  </span>
                  {details.production_countries[0] && (
                    <span className="country">
                      <u>{details.production_countries[0]?.name}</u>
                    </span>
                  )}
                </div>
                <p className="pt-2 fw-bold">{details.overview}</p>
                <div className="details-button">
                  <p>
                    Generos :{" "}
                    <span>{details.genres.map((gen) => gen.name).join(", ")} </span>
                  </p>
                  <p>
                    Productoras :{" "}
                    <span>
                      {details.production_companies
                        .filter((v, index) => index < 2)
                        .map((gen) => gen.name)
                        .join(", ")}
                    </span>
                  </p>
                  {trailer && (
                  <Button
                    className="btn-trailer mb-4"
                    onClick={() => setShow(true)}
                  >
                    Ver Trailer
                  </Button>
                )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
      {trailer && (
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Body>
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              height="600px"
              width="100%"
              title="video"
            ></iframe>
          </Modal.Body>
        </Modal>
      )}
    </Layout>
  );
};

export const Details = withAuth(DetailsPage);