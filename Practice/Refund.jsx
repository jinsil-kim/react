import { RiRefund2Line } from "react-icons/ri";

const Refund = () => {
  const style = {
    width: "100vw",
    height: "300px",
    padding: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#11B8A0",
  };
  return (
    <div style={style}>
      <span className="text-white text-5xl">환불 신청</span>
      <RiRefund2Line
        style={{ color: "white", width: "70px", height: "70px" }}
      />
    </div>
  );
};

export default Refund;
