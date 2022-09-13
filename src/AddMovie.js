import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";



const movieValidationSchema = yup.object({
  name: yup
  .string()  
  .required("Why not fill the name?"),  
  rating: yup
  .number()
  .min(0, "Need a higher rating 😃")  
  .max(10, "Too much rating 😃"),
  poster: yup
  .string()
  .min(4, "need a longer poster")
  .required("Why not fill the poster?"),  
  summary: yup
  .string()
  .min(20, "Need a longer summary")
  .max(100, "Too much summary")
  .required("Why not fill the summary?"),  
  trailer: yup
  .string()
  .min(3,"Need a longer trailer")
  .required("Why not fill the trailer"),  
})

export function AddMovie() {

  // const [name, setName] = useState("");
  // const [rating, setRating] = useState("");
  // const [poster, setPoster] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");
  

  const formik = useFormik({
    initialValues: { 
      name: "", 
      rating: "" , 
      poster: "",
      summary: "",
      trailer: ""
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {    
      createMovie(newMovie);
    }
  })
   
  const createMovie = (newMovie) => {
    console.log("createMovie", newMovie)

    fetch(`${API}/movies`,{
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((data) => data.json())
    .then(() => navigate("/movies"));
  }
   
 const navigate  = useNavigate();

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="add-movie-form">
        <TextField 
         id="name"
         name="name"
         value={formik.values.name} 
         onChange={formik.handleChange} 
         onBlur={formik.handleBlur}
         type="name" 
         label="Name" 
         error
         variant="standard" />
      {formik.touched.name && formik.errors.name? formik.errors.name : ''}

        <TextField 
        id="rating"
        name="rating"
        value={formik.values.rating} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        type="rating" 
        label="Rating" 
        error
        variant="standard" />
      {formik.touched.rating && formik.errors.rating? formik.errors.rating : ''}

        <TextField 
        id="poster"
        name="poster"
        value={formik.values.poster} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        type="poster" 
        label="Poster" 
        error
        variant="standard" />
      {formik.touched.poster && formik.errors.poster? formik.errors.poster : ''}

        <TextField 
       id="summary"
       name="summary"
       value={formik.values.summary} 
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}
       type="summary" 
       label="Summary" 
       error
       variant="standard" />
      {formik.touched.summary && formik.errors.summary? formik.errors.summary : ''}

        <TextField 
       id="trailer"
       name="trailer"
       value={formik.values.trailer} 
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}
       type="trailer" 
       label="Trailer" 
       error
       variant="standard" />
      {formik.touched.trailer && formik.errors.trailer? formik.errors.trailer : ''}

        {/* newMovie = object */}
        <Button  type="submit" onClick={createMovie} variant="contained" >Add Movie</Button>
        {/* const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          copy of movieList and add newMovie to it
          setMovieList([...movieList, newMovie]);
          fetch(`${API}/movies`,{
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then((data) => data.json())
          .then(() => navigate("/movies"));
          Currently post and naviagte is immediate
          When post is complete -> navigate/movies
          
        }}  */}
          
    

      </form>

    </div>
  );
}


//Task 
// 1. Delete movie
// 2. Edit Movie -> movies/edit/:id

//Add Movie
// 1. method - POST
// 2. body - data - JSON
// 3. Headers

