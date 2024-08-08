const Profileinfo = (props) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  return (
    <div style={style}>
      <span>{props.name}</span>
      <span>{props.date}</span>
    </div>
  );
};

export default Profileinfo;
