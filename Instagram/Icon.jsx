const Icon = (props) => {
  const { IconComponent } = props;

  return (
    <div
      className="flex justify-center items-center"
      style={{ width: "50px", height: "50px" }}
    >
      <IconComponent className="w-7 h-7"></IconComponent>
    </div>
  );
};

export default Icon;
