import Story from "./Story";

const StoryBoard = (props) => {
  return (
    <div className="hide-scrollbar border-b border-zinc-200 flex gap-2 items-center p-1 overflow-x-scroll ">
      {Array(props.friends || 1)
        .fill()
        .map((v) => (
          <Story />
        ))}
    </div>
  );
};

export default StoryBoard;
