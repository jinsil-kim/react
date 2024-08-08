import Box from "./Day03/BoxComponent/Box";
import Circle from "./Day03/CircleComponent/Circle";

function App() {
  const colors = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#d35400",
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
      {colors.map((x, i) => {
        if (i % 2 == 0) {
          return <Box backgroundColor={x}></Box>;
        } else {
          return <Circle backgroundColor={x}></Circle>;
        }
      })}
    </div>
  );
}
export default App;
