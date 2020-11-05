import React from "react";

/** Returns a list element containing film information */
const FilmCard = ({ film, addLike }) => {
  const { title, year, likes, description } = film;

  return (
    <li>
      <h3>{title}</h3>
      <p>{year}</p>
      <button onClick={() => addLike()}>{likes}</button>
      <p>{description}</p>
    </li>
  );
};

export default FilmCard;
