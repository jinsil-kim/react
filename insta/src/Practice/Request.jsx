import { SlNote } from "react-icons/sl";

const Request = () => {
  const style = {
    width: "100vw",
    height: "300px",
    padding: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#06538D",
  };
  return (
    <div style={style}>
      <span className="text-white text-5xl justify-start items-center">
        대형폐기물 배출신청
      </span>
      <SlNote
        style={{
          width: "50px",
          height: "50px",
          color: "white",
        }}
      />
    </div>
  );
};

export default Request;
