import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { Movie } from "./Movie";

export function MovieList({ movieList, setMovieList }) {
  // const movieList = INTIAL_MOVIE_LIST;
  // const [movieList, setMovieList] = useState(INTIAL_MOVIE_LIST)
  
  return (
    <div>
      

      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>

  );
}
