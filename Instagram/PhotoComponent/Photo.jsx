const Photo = (props) => {
  const map = {
    xs: { width: "20px", height: "20px" },
    small: { width: "28px", height: "28px" },
    medium: { width: "32px", height: "32px" },
    large: { width: "65px", height: "65px" },
  };

  return (
    <div
      className="rounded-full border-zinc-200"
      style={map[props.size || "large"]}
    >
      <img
        className="w-full h-full rounded-full object-cover"
        src={props.image || "dog.jpg"}
      />
    </div>
  );
};

export default Photo;
