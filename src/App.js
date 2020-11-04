import "./App.css";
import { useState, useEffect } from "react";
import awsconfig from "./aws-exports";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listFilms } from "./graphql/queries";
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

  return (
    <div className="App">
      <header>
        <AmplifySignOut />
      </header>
      <main>
        <ul>
          {films.map((film) => {
            return FilmCard(film);
          })}
        </ul>
      </main>
    </div>
  );
};

export default withAuthenticator(App);
