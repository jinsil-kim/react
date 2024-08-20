const Diary = () => {
  return (
    <span>
      <span className="font-semibold text-xs">{props.name || "jinsil"}</span>
      <span className="text-xs"> The game in Japan blah blah</span>
    </span>
  );
};

export default Diary;
