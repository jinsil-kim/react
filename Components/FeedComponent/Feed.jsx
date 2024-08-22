import Feedbottom from "./bottom/Feedbottom";
import Feedheader from "./headerfeed/Feedheader";
import FeedSnap from "./photo/FeedSnap";

const Feed = (props) => {
  return (
    <>
      <Feedheader {...props} />
      <FeedSnap {...props} />
      <Feedbottom {...props} />
    </>
  );
};

export default Feed;
