import Chat from "./Chat";
import Diary from "./Diary";

const Comment = (props) => {
  return (
    <div>
      <div>
        <Diary name={props.name} />
      </div>
      <div>
        <Chat time={props.time} />
      </div>
    </div>
  );
};

export default Comment;
