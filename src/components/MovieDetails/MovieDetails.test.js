import { render, screen } from "react-dom";
import { MovieDetails } from "./MovieDetails";

it('renders movie details poster', () => {
    render(<MovieDetails />);
    const PosterElement = screen.getBy()
    expect(PosterElement).toBeInDocument()
});
