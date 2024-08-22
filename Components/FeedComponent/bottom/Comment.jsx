import Date from "./Date";
import Diary from "./Diary";

const Comment = (props) => {
  return (
    <div>
      <div>
        <Diary name={props.name} />
      </div>
      <div>
        <Date date={props.date} />
      </div>
    </div>
  );
};

export default Comment;
