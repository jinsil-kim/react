import Navigation from "./Navigation";
import Header from "./Header";
import StoryBoard from "./StoryComponent/StoryBoard";
import Feed from "./FeedComponent/Feed";
import Info from "./Info";

const Instagram = (props) => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full max-w-sm m-auto">
        <Header />
        <StoryBoard friends={10} />
        <Feed />
        <Info />
        <Navigation />
      </div>
    </div>
  );
};

export default Instagram;
