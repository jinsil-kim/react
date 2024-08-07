import Blue from './Blue';
import Box from './Box';

function App() {
  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: '10px',
  };

  return (
    <div style={style}>
      {Array(1000)
        .fill()
        .map(() => {
          return <Blue></Blue>;
        })}
    </div>
  );
}
export default App;
