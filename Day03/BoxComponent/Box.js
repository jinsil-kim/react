const Box = (props) => {
  const boxStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: props.backgroundColor,
  };

  return <div style={boxStyle}></div>;
};

export default Box;
