import { render, screen } from "@testing-library/react";
import App from "./App";
import FilmCard from "./components/FilmCard";

/** @todo Mock authentication (first test currently renders amplify authenticator) */
test("renders App without crashing", () => {
  render(<App />);
});

test("renders FilmCard without crashing", () => {
  const film = { title: "test", year: 2000, likes: 2, description: "test" };
  render(<FilmCard film={film} />);
});

test("FilmCard displays title", () => {
  const film = {
    title: "testTitle",
    year: 2000,
    likes: 2,
    description: "testDescription",
  };
  render(<FilmCard film={film} />);
  const titleElement = screen.getByText(/testTitle/i);
  expect(titleElement).toBeInTheDocument();
});
