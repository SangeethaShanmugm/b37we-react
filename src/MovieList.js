import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { Movie } from "./Movie";

export function MovieList({ movieList, setMovieList }) {
  // const movieList = INTIAL_MOVIE_LIST;
  // const [movieList, setMovieList] = useState(INTIAL_MOVIE_LIST)
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  return (
    <div>
      <div className="add-movie-form">
        <TextField onChange={(event) => setName(event.target.value)}
          label="Name" variant="standard" />

        <TextField onChange={(event) => setRating(event.target.value)}
          label="Rating" variant="standard" />

        <TextField onChange={(event) => setPoster(event.target.value)}
          label="Poster" variant="standard" />

        <TextField onChange={(event) => setSummary(event.target.value)}
          label="Summary" variant="standard" />

        <TextField onChange={(event) => setTrailer(event.target.value)}
          label="Trailer" variant="standard" />

        {/* newMovie = object */}
        <Button onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          //copy of movieList and add newMovie to it
          setMovieList([...movieList, newMovie]);
        }}
          variant="contained">Add Movie</Button>

      </div>

      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>

  );
}
