import React from "react";
import PropTypes from "prop-types";

// state가 필요없는 component는 class component가 될 필요는 없다.
function Movie({ id, year, title, summary, poster }) {
  return <h5>{title}</h5>;
}

Movie.propTypes = {
  ID: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
