import Story from "./Story";

const StoryBoard = () => {
  return (
    <div className="hide-scrollbar border-b border-zinc-200 flex gap-2 items-center p-1 overflow-x-scroll ">
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default StoryBoard;
