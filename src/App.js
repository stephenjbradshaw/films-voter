import "./App.css";
import { useState, useEffect } from "react";
import awsconfig from "./aws-exports";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listFilms } from "./graphql/queries";
import { updateFilm } from "./graphql/mutations";

import FilmCard from "./components/FilmCard";

Amplify.configure(awsconfig);

const App = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms();
  }, []);

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

  const addLike = (i) => {
    const film = { ...films[i] };
    film.likes++;
    const { createdAt, updatedAt, ...updatedFilm } = film;
    API.graphql(graphqlOperation(updateFilm, { input: updatedFilm }))
      .then((filmsData) => {
        const filmsList = [...films];
        filmsList[i] = filmsData.data.updateFilm;
        setFilms(filmsList);
      })
      .catch((err) => {
        console.log("error on adding like to film", err);
      });
  };

  const filmCards = films.map((film, i) => {
    return <FilmCard film={film} addLike={() => addLike(i)} key={film.id} />;
  });

  return (
    <div className="App">
      <header>
        <h1>Films Voter</h1>
        <AmplifySignOut />
        <h2>A place to vote on your favorite films</h2>
      </header>
      <main>
        <ul>{filmCards}</ul>
      </main>
    </div>
  );
};

export default withAuthenticator(App);
