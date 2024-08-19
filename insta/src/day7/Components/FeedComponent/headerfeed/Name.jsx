import { HiCheckBadge } from "react-icons/hi2";

const Name = (props) => {
  return (
    <div className="flex flex-row gap-1">
      <span className="font-semibold text-xs">{props.name || "unName"}</span>
      <span style={{ color: "#3897f0" }}>
        {props.isPopular && <HiCheckBadge />}
      </span>
    </div>
  );
};

export default Name;
