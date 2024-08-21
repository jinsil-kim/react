import StoryPhoto from "../PhotoComponent/StoryPhoto";

const Story = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <StoryPhoto size="medium" image={props.image} />
      <span className="font-semibold text-xs">{props.name || "내 스토리"}</span>
    </div>
  );
};

export default Story;
