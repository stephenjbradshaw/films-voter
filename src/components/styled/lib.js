import styled from "styled-components";
import FilmCard from "../FilmCard";
import Header from "../Header";

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;

  h1 {
    margin: 0;
  }
`;

export const StyledFilmCard = styled(FilmCard)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  align-items: center;
  max-width: 80%;
  margin: 2rem auto;
  padding: 1rem;

  list-style-type: none;
  background-color: #fff;
  box-shadow: 5px 7px 12px #888888;

  button {
    background: none;
    border: none;
    cursor: pointer;

    svg {
      outline: none;
      height: 30px;
      width: 30px;
    }
  }
`;
