import { HiCheckBadge } from "react-icons/hi2";

const Name = (props) => {
  return (
    <div className="flex flex-row gap-2">
      <span className="font-semibold text-base">{props.name || "Unkown"}</span>
      <span
        style={{
          color: "#3897f0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "15px",
        }}
      >
        {props.isPopular && <HiCheckBadge />}
      </span>
    </div>
  );
};

export default Name;
