import { useState } from "react";

const Box = () => {
  const [bg, setbg] = useState("red");
  const changeBG = () => {
    setbg(bg == "red" ? "blue" : " red");
  };
  const style = {
    backgroundColor: bg,
  };

  return <div className="w-24 h-24" onClick={changeBG} style={style}></div>;
};

export default Box;
