import Photo from "./Photo";

const Storyphoto = () => {
  return (
    <div
      style={{ width: "64px", height: "64px", border: "2px solid #d91a46" }}
      className="flex justify-center items-center p-1 rounded-full"
    >
      <Photo />
    </div>
  );
};

export default Storyphoto;
