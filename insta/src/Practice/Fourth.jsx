import { BiColor } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { FaQuestion, FaWonSign } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";

const Fourth = () => {
  const style = {
    width: "100vw",
    height: "300px",
    padding: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#c7c7c7",
    fontSize: "25px",
  };

  const icons = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={style}>
      <div style={icons}>
        <CgNotes className="text-7xl" />
        <span>배출안내</span>
      </div>
      <div style={icons}>
        <FaWonSign className="text-7xl" />
        <span>수수료안내</span>
      </div>
      <div style={icons}>
        <GrAnnounce className="text-7xl" />
        <span>공지사항</span>
      </div>
      <div style={icons}>
        <FaQuestion className="text-7xl" />
        <span>문의전화</span>
        <span>032-715-5152</span>
      </div>
    </div>
  );
};

export default Fourth;
