const Circle = (props) => {
  return (
    <div className="rounded-full bg-cyan-50 text-3xl flex justify-center items-center w-56 h-56">
      <span>{props.name}</span>
    </div>
  );
};

export default Circle;
