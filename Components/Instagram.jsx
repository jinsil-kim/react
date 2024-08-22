import Navigation from "./Navigation";
import Header from "./Header";
import StoryBoard from "./StoryComponent/StoryBoard";
import Feed from "./FeedComponent/Feed";

const Instagram = () => {
  const data = [
    {
      image: "story/story1.jpg",
      name: "dhodlfo",
      isPopular: true,
      city: "Incheon",
      nation: "Korea",
      images: ["feed/feed1.jpg", "feed/feed2.jpg", "feed/feed3.jpg"],
      likePeople: [
        "jinsil",
        "kim",
        "jin",
        "min",
        "shin",
        "lee",
        "jeon",
        "dzfg",
        "kim",
        "jin",
        "min",
        "shin",
        "lee",
        "jeon",
        "dzfg",
        "jinsil",
        "kim",
        "jin",
        "min",
        "shin",
        "lee",
        "jeon",
        "dzfg",
        "kim",
        "jin",
        "min",
        "shin",
        "lee",
        "jeon",
        "dzfg",
      ],
      date: "방금 전",
    },
    {
      image: "story/story2.jpg",
      name: "jinsil",
      isPopular: false,
      city: "Incheon",
      nation: "Korea",
      images: ["feed/feed4.jpg", "feed/feed5.jpg"],
      likePeople: ["dhodlfo", "jin", "min", "shin", "lee", "jeon"],
      date: "August 19th",
    },
    {
      image: "story/story3.jpg",
      name: "tlqkf",
      isPopular: false,
      city: "Seoul",
      nation: "Korea",
      images: ["feed/feed6.jpg", "feed/feed7.jpg"],
      date: "August 18th",
    },
    {
      image: "story/story4.jpg",
      name: "dsfgh",
      isPopular: false,
      city: "Seoul",
      nation: "Korea",
      images: ["feed/feed3.jpg", "feed/feed1.jpg"],
      likePeople: ["dhodlfo", "jin", "min", "shin", "lee", "jeon"],
      date: "August 10th",
    },
    {
      image: "story/story5.jpg",
      name: "zdgh",
      isPopular: false,
      city: "Seoul",
      nation: "Korea",
      images: ["story/story3.jpg", "feed/feed7.jpg"],
      likePeople: ["dhodlfo", "jin", "min", "shin", "lee", "jeon"],
      date: "August 5th",
    },
  ];

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full max-w-sm m-auto">
        <Header />
        <StoryBoard />
        <div style={{ paddingBottom: "60px" }}>
          {data.map((v) => (
            <Feed {...v} />
          ))}
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default Instagram;
