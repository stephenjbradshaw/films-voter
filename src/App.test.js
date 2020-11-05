import { render, screen } from "@testing-library/react";
import App from "./App";
import { StyledFilmCard, StyledHeader } from "./components/styled/lib";

/** @todo Mock authentication (first test currently renders amplify authenticator) */
describe("App", () => {
  test("renders App without crashing", () => {
    render(<App />);
  });
});

describe("Components", () => {
  test("StyledFilmCard renders and displays film title", () => {
    const film = {
      title: "testFilmTitle",
      year: 2000,
      likes: 2,
      description: "test",
    };
    render(<StyledFilmCard film={film} />);
    const titleElement = screen.getByText(/testFilmTitle/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("StyledHeader renders and displays site title", () => {
    render(<StyledHeader />);
    const titleElement = screen.getByText(/Films Voter/i);
    expect(titleElement).toBeInTheDocument();
  });
});
