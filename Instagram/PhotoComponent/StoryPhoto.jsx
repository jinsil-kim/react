import Photo from "./Photo";

const StoryPhoto = (props) => {
  return (
    <div
      style={{ width: "80px", height: "80px", border: "solid 3px #d91a46" }}
      className="flex justify-center items-center p-1.5 rounded-full"
    >
      <Photo image={props.image} />
    </div>
  );
};

export default StoryPhoto;
