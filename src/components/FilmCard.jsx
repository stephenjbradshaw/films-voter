import React from "react";
import { AiFillLike } from "react-icons/ai";

/** Returns a list element containing film information */
const FilmCard = ({ film, addLike, className }) => {
  const { title, year, likes, description } = film;

  return (
    <li className={className}>
      <h3>{title}</h3>
      <p>{year}</p>
      <button onClick={() => addLike()}>
        <AiFillLike className="like" aria-hidden="true" tabIndex="-1" />
        <p>
          <strong>{likes}</strong>
        </p>
      </button>

      <p>{description}</p>
    </li>
  );
};

export default FilmCard;
