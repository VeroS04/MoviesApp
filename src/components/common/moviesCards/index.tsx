import { FC } from "react";
import { useNavigate } from "react-router-dom";
import './style.scss'

type Props = {
  img: string;
  title: string;
  id: number
};

const CardsMovie: FC<Props> = ({ title, img, id }) => {
  const navigate = useNavigate()
  return (
    <div className="card card-movies" onClick={() => navigate(`/movies/${id}`)}>
      <img className="card-img-top poster-movie" src={img} alt={title} />
      <div className="card-body card-title">
        <p className="card-text">{title}</p>
      </div>
      
    </div>
  );
};

export { CardsMovie };