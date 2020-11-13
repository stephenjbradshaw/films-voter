import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { API, graphqlOperation } from "aws-amplify";
import { updateFilm } from "../graphql/mutations";

/** Returns a list element containing film information */
const FilmCard = ({ film, className }) => {
  const { title, year, likes, description } = film;
  const [optimisticLikes, setOptimisticLikes] = useState(0);

  /** Adds a like to the film, renders optimistically */
  const addLike = () => {
    const newFilm = { ...film };
    newFilm.likes++;
    const { createdAt, updatedAt, ...updatedFilm } = newFilm;
    API.graphql(graphqlOperation(updateFilm, { input: updatedFilm })).catch(
      (err) => {
        console.log("error on adding like to film", err);
      }
    );
    setOptimisticLikes(optimisticLikes + 1);
  };

  return (
    <li className={className}>
      <h3>{title}</h3>
      <p>{year}</p>
      <button onClick={addLike}>
        <AiFillLike className="like" aria-hidden="true" tabIndex="-1" />
        <p>
          <strong>{likes + optimisticLikes}</strong>
        </p>
      </button>

      <p>{description}</p>
    </li>
  );
};

export default FilmCard;
