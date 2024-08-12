import { useState } from 'react';

const Count = () => {
  // react : props + state[]
  // useState(초기값)

  const [num, setNum] = useState(1);
  const [fruits, setFruits] = useState('🍓');

  const changeNum = () => {
    setNum(num + 1);
  };

  const changeFruits = () => {
    setFruits(fruits === '🍓' ? '🍒' : '🍓');
  };

  return (
    <>
      <div onClick={changeFruits}>{fruits}</div>
      <div onClick={changeNum}>{num}</div>
    </>
  );
};

export default Count;

//const [1,2] -> 첫번째 값이 초기값, 두번째가 바뀐값
