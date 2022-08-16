import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

// useEffect(() => {
//   console.log("Total clicks: 👍", like + dislike);
// },[like, dislike])

  return (
    <div>
      {/* onClick - camelCase letter */}
      <IconButton 
       onClick={() => { setLike(like + 1); }}
      aria-label="Like button"
      color="primary"
      >
        <Badge badgeContent={like} color="primary">
        👍 
     </Badge>
      
    </IconButton>

    <IconButton 
       onClick={() => { setDislike(dislike + 1); }}
      aria-label="Dislike button"
      color="error"
      >
         <Badge badgeContent={dislike} color="error">
         👎
     </Badge>
     
    </IconButton>
     
      
    </div>
  );
}
