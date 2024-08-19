import FeedPhoto from "./FeedPhoto";

const FeedSnap = () => {
  return (
    <div className="hide-scrollbar flex w-full h-96 snap-x snap-mandatory overflow-x-scroll">
      <FeedPhoto image="sunset.jpg" />
      <FeedPhoto image="tree.jpg" />
      <FeedPhoto image="nature.jpg" />
    </div>
  );
};

export default FeedSnap;
