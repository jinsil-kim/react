import Photo from "../../PhotoComponent/Photo";

const Chat = (props) => {
  return (
    <div className="flex flex-col py-1">
      <span className="text-slate-500">댓글 모두 보기</span>
      <div className="flex py-1.5 gap-2">
        <Photo size="small" />
        <span className="text-slate-500 ">댓글 추가...</span>
      </div>
      <div className="text-xs text-slate-500">{props.time || "방금 전"}</div>
    </div>
  );
};

export default Chat;
