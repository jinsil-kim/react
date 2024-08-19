import { IoIosArrowForward } from "react-icons/io";

const Notice = () => {
  const style = {
    width: "100vw",
    height: "300px",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  return (
    <div style={style}>
      <span className="text-5xl">
        [중요공지] 대형폐기물 수거업체가 2024. 3월부로 변경됩니다!
      </span>
      <span className="text-slate-300 text-xs">2024-02-29 11:00:00.00</span>
      <IoIosArrowForward className="relative left-3/4 text-5xl" />
    </div>
  );
};

export default Notice;
