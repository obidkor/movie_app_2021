import React from "react";
import "./Detail.css";

// Route되는 컴포넌트인 만큼 props가 기본적으로 세팅되어잇음.
// history props를 통해 redirection을 조절가능.
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    const movie = location.state;
    if (movie) {
      return (
        <div className="detail__container">
          <img src={movie.poster} alt={movie.title} title={movie.title}></img>
          <div className="movie__data">
            <h3 className="movie__title">{movie.title}</h3>
            <h5 className="movie__year">{movie.year}</h5>
            <ul className="movie__genres">
              {movie.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{movie.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
