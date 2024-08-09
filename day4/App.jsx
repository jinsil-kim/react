import MyButton from './day4/ButtonComponent/MyButton';

function App(props) {
  const stateArray = ['primary', 'hover', 'secondary', 'deactive'];
  const shapeArray = ['round', 'smooth', 'hard'];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        width: '800px',
        height: '300px',
        gap: '20px',
      }}
    >
      {stateArray.map((v) => {
        return shapeArray.map((x) => {
          return <MyButton shape={x} state={v}></MyButton>;
        });
      })}
    </div>
  );
}

export default App;
