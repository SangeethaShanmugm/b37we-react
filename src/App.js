import "./App.css";
import { AddColor } from "./AddColor"; // named
import { Counter } from "./Counter"  // default
import {useState} from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { Msg } from "./Msg" 
 

const INTIAL_MOVIE_LIST = [
  {
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
  },
  {
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
  },
  {
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 6,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
  },
  {
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8
  },
  {
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
  },
  {
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 7.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
  },
  {
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
  },
  {
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
  }
];

export default function App() {

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
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:movieid" element={<MovieDetails />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/users" element={<UserList />}/>       
      </Routes> 
 
      </div>
  );
  //JSX ends
}

function MovieDetails(){
  const {movieid} = useParams()
  return(
    <div>
      <h1>Movie Details Page {movieid}</h1>
    </div>
  )
}







function UserList(){

  const user = [
    {
    name: "Aruna",
    pic: "data:image/jpeg;base64,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",
  },
  {
    name: "Aziya",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU",
   },
   {
    name: "Pavithra",
    pic: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRIRFRISEhIREhERERISEhIRERESGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjErISs0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0ND80NDQxMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIDBAUGBwj/xABHEAACAQICBQgFCAcHBQAAAAABAgADEQQhBRIxQVEGEyJhcYGRoTJSscHRFFNicoKS4fAHFRZCosLSI0NUY3OT0yQzg4Sj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKBEAAgIBBAIBBAIDAAAAAAAAAAECEQMSITFRE0EiBBQyYXHwI6Gx/9oADAMBAAIRAxEAPwD6haFpIEGFozUUYMUcAHCAjjsRWwkCkuIilJiooKRasvIiKCVqFRQV6orS4iAEqyWigrK2SaysObEFKiHEx6kkEl7JIWl6iXErtFLbQtC0FFYENWW6kNTujsWkqIkZeVlbCFkuJURERLbRFYwopMRMsMRWFgQvJB4WkbRsET5yEjaOKkFsdOswmmniuMqKKdkiKPXM2kzZNo3BwYFpjWm0sJbhJcC1LY0BpMPMeu3CWKxicaGpGnWkSZQKkZa8mqByJmpAPK5MCVQtQM0QcRhbwKR7CbDXENaGrFqQJscBEBJgQoLI6oiKyy0VoA0QAjIkrQtHYUVtK2EvIkWEFITRQRERLLRETRSIoqIitLGWLVgxUQtFqyZEjCwFaElaELAOaI/eHgYtY8Y00kthcbRu2Rriqbb7eUjU/aNpR6AO3GTVid8i7JuqAdsES+xlP2o00TpZbn1QvHqHhfszha24jtkuh7iJkKlZUBZmCqouzMQABxJMsKjbefI+WvKc4hzSpkihTNgfnHBN37OHjvyqMdTHu+D12lf0g4aldaYfEP8AROol+tiPYDPOVf0lYgm60aKrwPOOfG4nhSYKZqoRNFE+n6G/SUrMExNLmwcucpksB1lDnbsJ7J7zD4pXVXR1dHF1ZTdWHEGfncT2PILT5pVOZd7UanrHo06m5uoHYe0SJY1yiZRo+t85LLiZKdQEXBBHEEES1R190ya6IT9F4URml1ytDxlhaRbLpESkjYy1TDWhbQ6RWIS0vImNSslorMWreSIkSI7FRPUHGVsBGDFBMbSKyIBJZeRNTqjtkpDWheBwvXHz3VFzxk3Iqoi+SdZ8oR89HC5B8Tw7pWQZISOoGUppF1PSQ9hFpt/W9dMmpsLbdZDJHlIGyqUUceBnbv0mc7S7aK003xUi3ATYnKAfN3HaLzM2k8M3pUCOFmAyhfCv6LNTJ9bYO+Jxi+UwUnwmjRiNPLtVWXwtChygYbrjgcxMb6OQ+jXRr7Bce0ShtDvfIoexvwlLHjqiHOZZyo5UBcNUUJq1HHNoQ2QLZE9y3PhPk073Kysed5kn/tXVrG4Lb85wTM6insd2JPSm+RGAjgIzQsEtp+6VCW0o2yGfX/0d4kVMOyk9OmwB+qR0T4hp7AIOE+PchdJNRr82DZaw1D1MLlfeO+fSlxz39LxUW9k4ZNqTQ1G0dc0xAUuuZcNiyfS902qZnqaJcSBpdciVPCaDEF65ak/YqM8JptFq9kLCjNaGrNNuyB7oagoylZXUuNgHeZpZB2Rc2Iago5jmp+AzkDiWGXN1G7APjOoacNSPWGmzlDGD95HU9Y+EtWutr38jNxQcJVUora1vDKPWhaTJ8rX6X3TCL5Cn0vGErWg0s8+mkaoGqKjEDjYyNfFO4syow60W/iJ2PkdP5631gAfG0sXAUxsqofrC/sm/miuEZPFL2zydTCX2ADvkPkDHYATw1hfwntFwqWzNPtDke2WJhaQ2FL9TiP7quEL7ZPlngXoMpzBUymrV1AWJtYbSdnXPoNbR9N9pB71M8N+kFadBaaqOnU1iBlmF32HWw+6ZS+pUtq3D7andnzzE1Nd3f1mJ85ReDRSWdiWxKMSMamNDaJiWUjnK5NDnFYjs6Ie1ai3q1KZ8HF59VOPIOwtn+crz5Nop7VKbcHQ+c+wLiiNht3AicmZ1LgpR+OxWmkelfmwLbdYEN5ZTfT0mbAinfsdSfCU08a+40z2pqnymhce/qIexiJFxJqRso4osM6br2qT7JoV77vG4mSnjGORpkdhBly4ld917QREn+yXGvRZc8JLWPCVjEp6wkalVSM8xwsTG/wCRULEYsJtyvx2TKNIr6yfetMmkObtkluvYJwa1EE3Cm3VrSoRjL2Em48I9emLU7Ch7GBlq1gfyJ4A2By1x43m7AK7my63l8ZUsKStMiOS3VHs4jOdhaFRNtvtGamrW227jOdumbUi68rqShsUONpCpil9cQTYUi2wimb5SnriEr5BSOMNMUW9KiT3i3kYfLsJ8047GI/mmFcEuwAibcNopTtIt13+E75Rxx7OSMskugathTs5wH61xKxhaR2VHHhN64FB+6JYKSjdM9SXFmmlvmjmjRybRVbvWeD5erq1UTX1wqIQcxbWLXHkJ9MNJeFp8n5VV9fEVWBuqHVB4gDV91++VBtyLgkmefaKMxS2bLgYgsV4xEDJgyaSsGTQwCjraHTWcC25j4KTPtlLRyMA3SzAO0bxPiWh6upUQ7mDIftKVHmRPtWFxpCKOCr7J5/1EmsiX6NdP+NNdmtdGINzeMsGjl4nxlI0l1Sh9JHc1u4RRaMtMjpphVHHxkmNtxM5H6wY/vN5RjSLDfftAj1LiiXF+2dDnW+bPiJJqwtmCJyn0q3EeEx4jSLH96KnLaI2q5Om7qxI12HVlaZHwLXuta3cbzkPiDxlfyxvWI75tHDJLZkSyxO4mCfaa1/rL8ZpRwm2pT8APZPMNjuLN4iUPjfyZTwTlyyfLBcHrW0nTG1w31VMz1dJ0jvPhPMJiC3orrdgm1MFWYZIBfiVieGMfyY1kcvxRpxOMTcZhfGDjLX0PW+j4yr9TvvKjvmsXiiuSJLLL0U/KRx84po/Ur+sviYS/Li7I8eXo1Cv1Sa4g9YkFpH8kSwUzw8xB0JKRI124mHPGIIeAPeImQ8AOwybRVSMemdI83Sdr2JGqvaRt7hc90+W6Scjo77gt2kZjsGQ7p7jlMut0GyGqxPZq5+Nz9yfOsRVLG535ntOZlQ9m0I7FRivAxSjUkYCISQgFDEkJEwWDA62iqJdio9U2+tun03A6RLIjW200vbjaxnyzR2Oei2ulr7MwDPW6E00jKqMwRtdrBr6lmckDWtkM985cuJymm1saqVQdcnrPlZvtkhib7hK10ZUOYC2+tkZauiKp3L94RPxo5k8hZTrCaxixa2oD2mVUtDVfofe/CX/qep/l/eP9MxlGL3NFLszvih82vjM2Jq3zFNB3zQdD17+jR/3X/oldbQ9bcaffUcfySoKMdxSba2ORUczOzzpPoXEetQHe7D2CZ35P4k/3tAf+Oo38wnbHJHs454p9HPa0jcTeeTmJ/wARS/2H97x/s5W34mkP/XP/ACy/NDsjwy6MaYhl9FmXsJEtGkqnzjd5vLjydffjKY6hh199SH7NnfjfCjSHtYyZZcT5/wCFxxZVwL9YN85/CZW2kX9cntEsPJwf42p9mnQHuMpbk6v+MxPctL3JEp4f6inHNXIfrJ/W8hCH7Or/AIvF/wDz/wCOENWLr/QqzdnPpctMOLBwy9Ihius4AF7EEL0tg8Z0KXK3Btcc/q2IzanUUG42i6zxmgtDJiULlnDIQrA+iSRe4tO/huRlH98u32iJTUVyafFOtztpylwhGt8qpjImxJVvukX8pS3KzB5/24NrbKdXPs6OcxpyQwwBBQkneXe485H9lMMAf7Mn7TX7BJqINx/Zj5R6WouhdKitrIqra9yCH1ib7PTI7RPCsd89tyk0MlLDKyIoamyl2AzIYkat+AuPCeJIjjS4NYOyMIQjs0oJISMYgBKNYo1gJlyzVRNrdszLL1jREme+5H6fCAUah6DHoN6jH909R8p9DptPhWGYz7JycqF8Nh3O00wD9klfdOH6uCT1L2EJOqZ2BVOwIxyJvdbX9Xbe/daWJUJFypBt6JIJHVlIosmBMY2J8mSpimzsl+8Cc3FYlvVbudh7J0nTOYMVQ6vJjMHJ3ubw0+jjVcS4J6Dd71D7WmOrim+bXvLE+0zfUpZnI+B+Eoel1G864ZI9EThLsyI7n+7pn7A94gKr7BTo3/0kP8s2UaXUew5S1KOe1l6hsPgJbzRT4J8Mq5MSYitf0aYH0adMewTamIfebdyj3SaYVQdnu90b0vze8zllUnsaRhp5EcU3zlu68pfEn5zwQQdDxXvJEyVKJ+iOzW+EuFNinxsX/LD87/AITHzR4jzhNqRhueT0NTqBKKi9mbVb0gQNZibWvw857tB2dvSM5WDwqLqCxyJObbNvA9ZnXVh2yskr4JgrtsbSEHqDbaVvWA4yItjZxOWFS2GcDa7Iv8Vz7J83cz3HLOsTTSx6Ovst9E5k+M8LebRWxpDgUIQMZqEkDIwhYiV5NZASSmMTReolybpSstQxoyZuw+2fZeTAAwuHH+WD4kn3z4vRbZPs/J8/9Ph/9GmPBQJyfW8L+Rw3Z3Fk7SumZaDMYO4kyKmWZMQnX5/hNrSiofzeYzRpBnExNMdX3hMLoNxB752MVTY3sCewj3zFzLcDfrCNIi2jobsx0kz2zfh6efHw+EaU+IH+3l5SynTz2DuUrHIaZIUu3xX+mRen2+I/pmgL1SLCJJktmN6f51h7xMmIojdbr6dP4TqkD1fOZq4+if4fxm0G7IbObzHUv3k+EJq5vqPlCa6mRscCkU23F+34Sy7bnA7svEzkU9a+V8++XrWa1tbfY2VZ2uBx6tjQ9Zx/eHbuBlYxZG0sdl75cOqQGI2dMk9agyo4k32jPI9EZ5dUpRIbOTypxIamARmWTVNxuBubD85zyBnoeU+uzCo/RX0UXexvmbcLTzpMlnZh/EIRGAiNxwhCAgklMiJIRoRepliNM6GXJLSZnI20TPtWh2HM0QpDBaSKCMwbKAfMGfFsOQO+fUuRdcvhrEjoOyrY5gWDZ97NOb62NwUumLE/lR62m54S9X6pz0ZhsMmuIbgfP4Tz4youUTWz9UpcypsUd6+f4So4obx4Wg3YRVBXpg7b9xtMj4Ybdap3MfZLXxKniO6/slfO79ZezfEoy6NNSREU7fvN3nP2SxQe3ti5wcR3GPW4SnFsNRMueEReVMzSIZ+Hl+MpQIlIu1pmrmVUsaGepTsQ1PV1iR0TcXFs5Ks3VNIxaZDlaM8I4TSiLR5L5bST0q6IdtmqIG7LS5agZQyPrKwFmRlsR2rPmK5bMp6Hk5pxaKtTcdC5dWW5IbLo6u+9uqdxEsDUdmepNJb8exgx8IM6pchCx2W6Nsj2XP4SheUmGK6xdVubWKVBUA6woMp03pylSRObWnUqVAGS5LBEI9NrNfPKwyi1GShK6OJp6mxAqP6bMFRFChUTVY7tpyHxM8+Z6StyipVKZV6JFRRrKUIKM4yBuc1GeYznmpLOvGmlTARxCOSbBCEICYRiRMZlICStJh5UsksepiaNuBQvUppf0nVewEz6dh8bg8Agp85mTrsB/aVXOzXYKLLs322ZT5ZT+PsjUW2ATLJDWqb2Fwz3OmeXFTnE+Svq01Xpl6aEux6mBIAHZtnEw3KbGJcriqvS269qg7Rrg27pxFeS1jFHFBbJCbfJ3zyzx2rqfKWy383R1tvral5vwXL2uoprUSnW1bXcl6btkR0iuR2jdbLZvnkCZAweOL9Cs9ZieXmJYsFp4ZBuPNuxt3vbymTBcscSjq1RxVp36aFEVtW+eoVAsRuvcTzplZEpQilshPc+wjTGE6P/AFdEawDANVUHVIyuCcu+bURGAIqAg7CpVgd+RBscp8QIm7Q+k3wz84hNiCGS5CuDxtv65Phfpht0fXnQi9m9g984ekMYjc4VxRo1KAKFmK00uwuPSNmubWInBw/Lklhr06irY6xR6bnwKD2zz+ldLJWFhQFMhrowcHLgVCgeFrZyowfsz0ts9PorT9dnIQU3epZWcc2Rr6oVWvtsLbr3nr0qtqqHJZgBrtqlQWtnlunxW+Y6tk7+jeVmIpaquxrU1uNVz09U7g+3dvvCUAcWj6Zzg/Ijnnv2zw3zlT7r/GEnSTTPmEIWhabHSK0AI7QtAYQhCJgEIQhQ0EIQkgwhCEYgEYiEYgNFyNJ60pWSEaEy0NDWld4Xj2JosLSOvIxCAqJa0CYooBQGImMyJgNoIQiMAAwhCAUEIQgFEIQhAYQhCABCEIAEIxAyorYG6FC0IRNDsBCEJLBhGDFCICxYAxJARoCyEiTEGgInCKEAAmAMRiJgBKIyN4XgA4jFeF4UA4QijAcIoQFSIwhCAwhCEACEIQGECYSJl8IQwY7yJEYMjUOhwhI3ktjJQEQMcBklMDIyUdksLwvAxXgId44rxXgA7wkYxBAO0BCRjAlAxXigA7wvFCKhkrwkYRgEBCEBBCEIDCEIQEERhCXLgSAxQhMyyUjCEhjEJIQhGgYSwQhGSxGRhCUAQhCIQRiKEEBKRhCNgEIQgAQhCAwhCEAP/9k=",
   },
  ]


  return (
    <div>
    {user.map((user) => (
      <Msg name={user.name} pic={user.pic} />
    ))} 
    </div>
  )
}

function Home() {
  return (
    <h1>Welcome to the Movie app 😊🎇🎇✨🎉🎉</h1>
  )
}

function MovieList(){
  const movieList = INTIAL_MOVIE_LIST;
  return(
    <div className="movie-list">
     {movieList.map((mv, index) => (
        <Movie key={index} movie={mv} id={index}/>
     ))}
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
      <h2 className="movie-name">{movie.name} - {id}</h2> 
      <p style ={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      {/* /movies/0 */}
      <button onClick={() => navigate("/movies/" + id)}>Info</button>
      <button onClick={() => setShow(!show) }>Toggle description</button>
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
