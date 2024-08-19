import Navigation from "./Navigation";
import Header from "./Header";
import StoryBoard from "./StoryComponent/StoryBoard";
import Feed from "./FeedComponent/Feed";

const Instagram = (props) => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full max-w-sm m-auto">
        <Header />
        <StoryBoard />
        <Feed />
        <Navigation />
      </div>
    </div>
  );
};

export default Instagram;
