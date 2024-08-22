const Date = (props) => {
  return (
    <div>
      <span className="text-gray-300 text-xs">
        {props.date || "No Month Date"}
      </span>
    </div>
  );
};

export default Date;
