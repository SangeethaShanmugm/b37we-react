import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { API } from "./global";

export function MovieList() {
  // const movieList = INTIAL_MOVIE_LIST;
  const [movieList, setMovieList] = useState([]);
  

  const getMovies = () => {
    fetch(`${API}/movie`,{
      method: "GET",
    })
    .then((data) => data.json())
    .then((mvs) =>setMovieList(mvs));
   }


  useEffect(() => getMovies(),[]);


  return (
    <div>
      
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={mv.id} movie={mv} id={mv.id}  />
        ))}
      </div>
    </div>

  );
}
