import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { API } from "./global";

export function MovieList() {
  // const movieList = INTIAL_MOVIE_LIST;
  const [movieList, setMovieList] = useState([]);
  
  useEffect(() => {
    fetch(`${API}/movie`,{
      method: "GET",
    })
    .then((data) => data.json())
    .then((mvs) =>setMovieList(mvs));
   },[]);


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
