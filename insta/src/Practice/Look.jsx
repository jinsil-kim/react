import { SlMagnifier } from "react-icons/sl";

const Look = () => {
  const style = {
    width: "100vw",
    height: "300px",
    padding: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#008CA2",
  };
  return (
    <div style={style}>
      <span className="text-white text-5xl">배출신청 조회</span>
      <SlMagnifier style={{ color: "white", width: "50px", height: "50px" }} />
    </div>
  );
};

export default Look;
