import FeedSnap from "./Feedcomponent/photo/FeedSnap";
import HeaderFeed from "./Feedcomponent/HeaderFeed/HeaderFeed";
import Feedbottom from "./Feedcomponent/bottom/Feedbottom";

const Feed = (props) => {
  return (
    <div>
      <HeaderFeed {...props} />
      <FeedSnap {...props} />
      <Feedbottom {...props} />
    </div>
  );
};

export default Feed;
