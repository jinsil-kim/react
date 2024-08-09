const Box = (props) => {
  const style = {
    width: '100px',
    height: '100px',
    backgroundColor: props.backgroundColor,
  };

  return <div style={style}></div>;
};

export default Box;
