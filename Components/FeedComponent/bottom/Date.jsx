const Date = (props) => {
  return (
    <div>
      <span className="text-gray-300">{props.date || "No Montyh Date"}</span>
    </div>
  );
};

export default Date;
