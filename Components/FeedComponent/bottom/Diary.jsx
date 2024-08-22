const Diary = (props) => {
  return (
    <div>
      <span className="font-semibold text-xs">{props.name || "Unknown"}</span>
      <span className="text-xs">
        The game in Japan blah blah blah blah blah blah blah blah blah blah
      </span>
    </div>
  );
};

export default Diary;
