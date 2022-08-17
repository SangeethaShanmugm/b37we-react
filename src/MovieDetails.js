import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";
import { useState, useEffect } from "react";
import { API } from "./global";

export function MovieDetails( ) {
  const { id } = useParams();
  // const movie = movieList[movieid];
  // console.log(movieList, movie)
 
  const [movie, setMovie] = useState({})

  
  useEffect(() => {
    fetch(`${API}/movie/${id}`, {method: "GET",})
    .then((data) => data.json())
    .then((mv) => setMovie(mv));
  },     []);


 const navigate = useNavigate();

if(!movie){
  // navigate("/404");
  return <NotFoundPage />
}

  return (
    <div>
      <iframe width="100%" height="500" src={movie.trailer} title="Naacho Naacho Song (RRR) - NTR, Ram Charan | M M Kreem | SS Rajamouli | Vishal Mishra & Rahul" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-detail-container"> 
      <div className="movie-specs">
      <h2 className="movie-name">{movie.name}  </h2>               
      <p className="movie-rating">⭐{movie.rating}</p>
      </div>
      <p className="movie-summary">{movie.summary}</p>
      <Button  
      onClick={() => navigate(-1)}
      variant="contained" 
      startIcon={<ArrowBackIosIcon />}>
  BACK
</Button>
      </div>       

    </div>
  );
}


//Task 
// path -  /movies/add -> <AddMovie />
//Add Movie -> Movie added -> direct - /movies(Movie List page)

//Edit Movie -> /movies/edit/:id -> PUT method //MovieDetails + AddMovies comp