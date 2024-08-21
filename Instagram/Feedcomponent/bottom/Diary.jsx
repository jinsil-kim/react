const Diary = (props) => {
  return (
    <div>
      <span className="font-semibold">{props.name || "jinsil"}</span>
      <span className="p-1.5">
        코딩 어렵다 너무 어렵다 울고싶다 머리가 빙글빙글 돌고 좋아하는 우리사이
        멀어질까 두려워
      </span>
    </div>
  );
};

export default Diary;
