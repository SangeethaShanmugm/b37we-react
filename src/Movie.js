import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { Counter } from "./Counter" // default  ;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from "./global";


export function Movie({ movie, id, deleteButton, editButton }) {
  // const movie = {
  //   name: "RRR",
  //   rating: 8.8,
  //   summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  //   poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG"
  // };
  //conditional styling
  const styles = {
    color: movie.rating >= 8 ? "green" : "red"
  };

  const [show, setShow] = useState(true);

  //True =block
  //False - none
  //!show = false - !true = false
  const summaryStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name} - {id}
          <IconButton onClick={() => setShow(!show)}
            aria-label="Toggle description"
            color="primary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton
            onClick={() => navigate("/movies/" + id)}
            color="primary"
          >
            <InfoIcon />
          </IconButton>

        </h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      {/* /movies/0 */}


      {/* <p style={summaryStyles} className="movie-summary">{movie.summary}</p> */}
      {/* //conditional rendering */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter /> {deleteButton} {editButton}


      {/* <IconButton onClick={()=> {       
          fetch(`${API}/movie/${id}`, {
            method: "DELETE",}) 
            .then(() =>getMovies());           
      }}>
        <DeleteIcon />
      </IconButton> */}
    </div>
  );
}
