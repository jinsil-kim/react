import { RiVerifiedBadgeFill } from "react-icons/ri";

const Name = (props) => {
  return (
    <div className="font-semibold text-sm flex items-center gap-1">
      <span>{props.name || "Unknown"}</span>
      <span style={{ color: "#3897f0" }}>
        {props.isPopular && <RiVerifiedBadgeFill />}
      </span>
    </div>
  );
};

export default Name;
