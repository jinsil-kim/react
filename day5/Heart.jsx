import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';

const Heart = () => {
  const [x, setX] = useState(false);
  const changeX = () => {
    setX(!x);
  };
  return <div onClick={changeX}>{x ? <FaHeart /> : <IoMdHeartEmpty />}</div>;
};

export default Heart;
