import { Example } from "./Example";
import { useState } from "react";
import { IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate} from "react-router-dom";

const groupofName = [
    {
        name: "Bella",
        work: "Musician",
    },
    {
        name: "Jack",
        work: "Doctor",
    },
    {
        name: "Nicolas",
        work: "Singer",
    },
    {
        name: "Stephen",
        work: "Developer",
    },
]  

export function Example2( ) {
    const [change, setChange]  = useState(true)
    const [count, setCount] =  useState(0);
    const navigate = useNavigate();
//   let count = 0;
    
      
    
    return (
        <div> 
            
           <button onClick= { () => {
                   setChange(!change)
           }}> Click Here !</button>
         {change ? <h1>Welcome</h1> : <h1>Everyone</h1>  }
         
      {groupofName.map((gname, index) => <Example key={index} name={gname.name} work={gname.work}/>  )}
{/* 
          <Example name={groupofName[3]}/> */}
          {/* <Example name="Jack"/> */}
          <button 
          className="button-style"
          onClick={()=>
            {
                setCount(count+1); 
                console.log(count);
            } } >Count {count}</button>
           
          <IconButton 
            
            onClick={() => navigate("/color-game")}
            color="primary"
          >
            <InfoIcon  fontSize="large"
/>
          </IconButton>
        </div>
    );
}
