import "./App.css";
import { useState, useEffect } from "react";
import awsconfig from "./aws-exports";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { filmsByLikes } from "./graphql/queries";

import { StyledHeader, StyledFilmCard } from "./components/styled/lib";

Amplify.configure(awsconfig);

const App = () => {
  const [films, setFilms] = useState([]);

  /** Calls fetchFilmsByLikes on first render */
  useEffect(() => {
    // fetchFilms();
    fetchFilmsByLikes();
  }, []);

  /** Fetches films ordered by likes descending */
  const fetchFilmsByLikes = () => {
    API.graphql(
      graphqlOperation(filmsByLikes, { type: "film", sortDirection: "DESC" })
    )
      .then(({ data }) => {
        const filmsList = data.filmsByLikes.items;
        setFilms(filmsList);
      })
      .catch((err) => {
        console.log("error on fetching films", err);
      });
  };

  /** Generates a list of film cards */
  const filmCards = films.map((film) => {
    return <StyledFilmCard film={film} key={film.id} />;
  });

  return (
    <div className="App">
      <StyledHeader />
      <main>
        <h2>A place to vote on your favourite films</h2>
        <ul>{filmCards}</ul>
      </main>
    </div>
  );
};

export default withAuthenticator(App);
