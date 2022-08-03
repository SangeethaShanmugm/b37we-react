import { useState } from "react";
import { ColorBox } from "./Colorbox";

export function AddColor() {
  // const color = "skyblue";
  const [color, setColor] = useState("orange");
  const [colorList, setColorList] = useState(["skyblue", "pink", "red","purple"]);

  // const colorList =["skyblue", "pink", "red","purple"]

  //onColor - setChange - color gets updated
  const styles = {
    fontSize: "25px",
    backgroundColor: color,
  };
  return (

    <div>
      <div className="add-color">
      {/* onChange - camelCase letter */}
      <input
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        type="text"
        value={color} />
        <button
        //copy the colorList and add newColor to it
        onClick={()=> setColorList([...colorList, color])}
        >Add Color</button>
        </div>
       {colorList.map((clr) => (
         <ColorBox color={clr} />
       ))      
       }
        
    </div>
  );
}



// 1. named - Import and export - prefered
// 2. default - Import and export - only one can be exported