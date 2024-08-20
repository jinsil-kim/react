import Date from "./Date";
import Diary from "./Diary";

const Comment = () => {
  return (
    <>
      <div>
        <Diary name="jinsil" />
      </div>
      <div>
        <Date date="August 20th"></Date>
      </div>
    </>
  );
};

export default Comment;
