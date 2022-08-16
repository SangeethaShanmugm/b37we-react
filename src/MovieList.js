import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { Movie } from "./Movie";

export function MovieList({movieList, setMovieList}) {
  // const movieList = INTIAL_MOVIE_LIST;
  // const [movieList, setMovieList] = useState([]);
  
  // useEffect(() => {
  //   fetch("https://62f5efac612c13062b42f254.mockapi.io/movie")
  //   .then((data) => data.json())
  //   .then((mvs) => console.log(mvs));
  //  },[]);

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
