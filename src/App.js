import "./App.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { AddColor } from "./AddColor"; // named
import { Counter } from "./Counter"  // default
import {useState} from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { UserList } from "./UserList";
import { Home } from "./Home";
import { DataArrayTwoTone } from "@mui/icons-material";
 

const INTIAL_MOVIE_LIST = [
  {
    id: "100",
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    id: "101",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU"
  },
  {
    id: "102",
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0"
  },
  {
    id: "103",
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {
    id: "104",
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    id: "105",
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: "106",
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    id: "107",
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
  }
];


export default function App() {
  //Lifting the state up
  const [movieList, setMovieList] = useState(INTIAL_MOVIE_LIST)

  return (
    <div className="App">

    <nav>
      <ul>
        <li>
          {/* Link change page without refresh */}
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/movies">Movies</Link>        
        </li>
        <li>
        <Link to="/color-game">Color-game</Link>   
        </li>
        <li>
        <Link to="/somewhere">Some Where</Link>   
        </li>
      </ul>
    </nav>
     {/* Router - to map the  URl with component*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList}/>} />
        <Route path="/movies/:movieid" element={<MovieDetails movieList={movieList}/>} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/users" element={<UserList />}/>      
        <Route path="*" element={<NotFoundPage />}/>      
      </Routes> 
 
      </div>
  );
  //JSX ends
}

function NotFoundPage(){
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  )
}

function MovieList( { movieList, setMovieList}){
  // const movieList = INTIAL_MOVIE_LIST;



  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("")

  return(
    <div>
      <div className="add-movie-form">
      <TextField  onChange={(event) => setName(event.target.value)}  
        label="Name" variant="standard" />
        
      <TextField  onChange={(event) => setRating(event.target.value)}  
        label="Rating" variant="standard" />
        
        <TextField  onChange={(event) => setPoster(event.target.value)}  
        label="Poster" variant="standard" />     
             
        <TextField  onChange={(event) => setSummary(event.target.value)}  
        label="Summary" variant="standard" />

        <TextField  onChange={(event) => setTrailer(event.target.value)}  
        label="Trailer" variant="standard" />

       {/* newMovie = object */}
       <Button  onClick={() => {
        const newMovie =  {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary,  
          trailer: trailer,         
        };
          //copy of movieList and add newMovie to it
         setMovieList([...movieList, newMovie])
        }
      }
       variant="contained">Add Movie</Button>

      </div>

        <div className="movie-list">
         {movieList.map((mv, index) => (
        <Movie key={index} movie={mv} id={index}/>
     ))}
     </div>
    </div>
    
  )
}

function Movie({ movie, id}){
  // const movie = {
  //   name: "RRR",
  //   rating: 8.8,
  //   summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  //   poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG"
  // };

//conditional styling


const styles ={
  color: movie.rating >= 8 ? "green" : "red"
}

const [show, setShow] = useState(true);

//True =block
//False - none
//!show = false - !true = false

const summaryStyles = {
  display: show ? "block" : "none",
}

const navigate = useNavigate();

  return(
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster}/>
      <div className="movie-specs">
      <h2 className="movie-name">{movie.name} - {id}
      <IconButton onClick={() => setShow(!show) }
      aria-label="Toggle description"
      color="primary">
        {show ?  <ExpandLessIcon /> : <ExpandMoreIcon/> }
       </IconButton>
       <IconButton
       onClick={() => navigate("/movies/" + id)}
       color="primary"
       >
       <InfoIcon />
       </IconButton>
      
      </h2> 
      <p style ={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      {/* /movies/0 */}    
      
         
      {/* <p style={summaryStyles} className="movie-summary">{movie.summary}</p> */}
      {/* //conditional rendering */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null }
      <Counter />
    </div>
  )
}



//Task - 15 mins + 5mins breaks
//Add Movie - like AddColor
// 4 input-  name, poster, rating, summary
// button - Add Movie  - end of the list


                    // MovieList(data)   ->  Movie(data) -> Counter (data) 
                    //              -> Contact (data) 
                    // App


                    //  MovieDetails  ->  About 

// React flow in one direction - from parent to child 
// Not from child to parent 
// From App - MovieList and MovieDetails component


              // App(mountain )( movieList, setMovieList)
   
    //  MovieList (valley)     MovieDetails  (valley)        

//  React is a unidirectional - 

<iframe width="789" height="328" src="https://www.youtube.com/embed/bwzLiQZDw2I" title="Frozen 2 | Official Trailer 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>