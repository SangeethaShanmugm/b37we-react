import { useState } from "react";

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      {/* onClick - camelCase letter */}
      <button className="like-style" onClick={() => {
        setLike(like + 1);
      }}> 👍 {like} </button>
      <button className="dislike-style" onClick={() => {
        setDislike(dislike + 1);
      }}> 👎  {dislike} </button>

    </div>
  );
}
