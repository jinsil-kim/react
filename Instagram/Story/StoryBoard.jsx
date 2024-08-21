import Story from "./Story";

const StoryBoard = () => {
  const friends = [
    { name: "dhodlfo", image: "dog.jpg" },
    { name: "lee", image: "story/story0.jpg" },
    { name: "kim", image: "story/story1.jpg" },
    { name: "jeon", image: "story/story2.jpg" },
    { name: "choi", image: "story/story3.jpg" },
    { name: "min", image: "story/story4.jpg" },
  ];
  return (
    <div className="hide-scrollbar flex flex-row gap-4 items-center border-b p-3.5 overflow-x-scroll ">
      {friends.map((v) => (
        <Story image={v.image} name={v.name} />
      ))}
    </div>
  );
};

export default StoryBoard;
