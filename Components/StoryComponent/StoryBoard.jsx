import Story from "./Story";

const StoryBoard = () => {
  const friends = [
    { name: "jinsil", image: "story/story0.jpg" },
    { name: "kim", image: "story/story1.jpg" },
    { name: "lee", image: "story/story2.jpg" },
    { name: "park", image: "story/story3.jpg" },
    { name: "min", image: "story/story4.jpg" },
    { name: "ji", image: "story/story5.jpg" },
    { name: "shin", image: "story/story6.jpg" },
  ];
  return (
    <div className="hide-scrollbar border-b border-zinc-200 flex gap-2 items-center p-1 overflow-x-scroll ">
      {friends.map((v) => (
        <Story image={v.image} name={v.name} />
      ))}
    </div>
  );
};

export default StoryBoard;
