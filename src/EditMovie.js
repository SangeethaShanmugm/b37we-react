import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import { useParams } from "react-router-dom";

export function EditMovie() {

  const { id } = useParams();
  // const movie = movieList[movieid];
  // console.log(movieList, movie)
 
  const [movie, setMovie] = useState(null)

  
  useEffect(() => {
    fetch(`${API}/movie/${id}`, {method: "GET",})
    .then((data) => data.json())
    .then((mv) => setMovie(mv));
  },     []);

  

  return movie ? <EditMovieForm movie={movie}/> : "Loading...";   
 
}


function EditMovieForm({movie}){

  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
 const navigate  = useNavigate();
 
  return (
    <div className="add-movie-form">
    <TextField value={name} onChange={(event) => setName(event.target.value)}
      label="Name" variant="standard" />

    <TextField value={rating} onChange={(event) => setRating(event.target.value)}
      label="Rating" variant="standard" />

    <TextField value={poster} onChange={(event) => setPoster(event.target.value)}
      label="Poster" variant="standard" />

    <TextField value={summary} onChange={(event) => setSummary(event.target.value)}
      label="Summary" variant="standard" />

    <TextField value={trailer} onChange={(event) => setTrailer(event.target.value)}
      label="Trailer" variant="standard" />

    {/* newMovie = object */}
    <Button onClick={() => {
      const updatedMovie = {
        name: name,
        poster: poster,
        rating: rating,
        summary: summary,
        trailer: trailer,
      };
      //copy of movieList and add newMovie to it
      // setMovieList([...movieList, newMovie]);
      fetch(`${API}/movie/${movie.id}`,{
        method: "PUT",
        body: JSON.stringify(updatedMovie),
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((data) => data.json())
      .then(() => navigate("/movies"));
      //Currently post and naviagte is immediate
      //When post is complete -> navigate/movies
      
    }} 
      variant="contained" >Save</Button>


  </div>
  )
}

