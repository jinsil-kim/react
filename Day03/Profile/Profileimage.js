const Profileimage = (props) => {
  return (
    <div style={{ width: "50px", height: "50px" }}>
      <img
        src={props.src}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "9999px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Profileimage;
