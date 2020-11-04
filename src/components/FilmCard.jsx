import React from "react";

const FilmCard = ({ id, title, year, likes, description }) => {
  return (
    <li key={id}>
      <h3>{title}</h3>
      <p>{year}</p>
      <p>{likes}</p>
      <p>{description}</p>
    </li>
  );
};

export default FilmCard;
