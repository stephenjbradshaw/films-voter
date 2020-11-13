import "./App.css";
import { useState, useEffect } from "react";
import awsconfig from "./aws-exports";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { listFilms } from "./graphql/queries";

import { StyledHeader, StyledFilmCard } from "./components/styled/lib";

Amplify.configure(awsconfig);

const App = () => {
  const [films, setFilms] = useState([]);

  /** Calls fetchFilms on first render */
  useEffect(() => {
    fetchFilms();
  }, []);

  /** Fetches films from API and sets state
   * @todo Implement sorting films by number of likes
   * Have started trying an approach to this. See:
   *  - amplify/backend/api/filmsvoter/schema.graphql
   *  - generated getFilmsByLikes query in src/graphql/queries.js
   * */
  const fetchFilms = () => {
    API.graphql(graphqlOperation(listFilms))
      .then(({ data }) => {
        const filmsList = data.listFilms.items;
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
