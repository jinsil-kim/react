import Feed from "./Feed";
import Navigation from "./Navigation";
import StoryBoard from "./Story/StoryBoard";
import Topbar from "./Topbar";

const Instagram = () => {
  const data = [
    {
      image: "feed/feed7.jpg",
      name: "jinsil",
      isPopular: false,
      place: "Incheon,",
      nation: "Korea",
      images: ["feed/feed0.jpg", "feed/moon.png", "feed/sunrise.jpg"],
      likePeople: ["dhodlfo", "jinsil", "lee", "kim", "jeon", "shin", "woo"],
      time: "2시간 전",
    },
    {
      image: "feed/feed10.jpg",
      name: "dhkTl",
      isPopular: false,
      place: "home,",
      nation: "Korea",
      images: ["feed/feed7.jpg", "feed/feed6.jpg", "feed/feed5.jpg"],
      likePeople: ["wow", "jinsil", "lee", "kim", "jeon", "shin", "woo"],
      time: "1시간 전",
    },
    {
      image: "feed/feed1.jpg",
      name: "wow",
      isPopular: false,
      place: "Seoul,",
      nation: "Korea",
      images: ["feed/feed2.jpg", "feed/feed1.jpg", "feed/feed3.jpg"],
      likePeople: ["dmdk", "jinsil", "lee", "kim", "jeon", "shin", "woo"],
      time: "2일 전",
    },
  ];
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full max-w-sm m-auto">
        <Topbar />
        <StoryBoard />
        {data.map((v) => (
          <Feed {...v} />
        ))}
        <Navigation />
      </div>
    </div>
  );
};

export default Instagram;
