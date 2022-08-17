import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { API } from "./global";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";


export function MovieList() {
  // const movieList = INTIAL_MOVIE_LIST;
  const [movieList, setMovieList] = useState([]);
  
 const getMovies =() => {
  fetch(`${API}/movie`,{
    method: "GET",
  })
  .then((data) => data.json())
  .then((mvs) =>setMovieList(mvs));
 }

  useEffect(() => getMovies(),[]);

  const navigate  = useNavigate();

  return (
    <div>
      
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={mv.id} movie={mv} id={mv.id} 
          deleteButton={
            <IconButton
            onClick={()=>{
              fetch(`${API}/movie/${mv.id}`, {
                method: "DELETE",}) 
                .then(() =>getMovies());   
             }}color="error" >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
            onClick={()=> navigate(`/movies/edit/${mv.id}`)}

              // fetch(`${API}/movie/${mv.id}`, {
              //   method: "DELETE",}) 
              //   .then(() =>getMovies());   
            color="secondary">
              <EditIcon />
            </IconButton>
          }
           />
        ))}
      </div>
    </div>

  );
}
