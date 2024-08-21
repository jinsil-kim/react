import Comment from "./Comment";
import InteractiveIcons from "./InteractiveIcons";
import Like from "./Like";

const Feedbottom = (props) => {
  return (
    <div>
      <InteractiveIcons />
      <Like {...props} />
      <Comment {...props} />
    </div>
  );
};

export default Feedbottom;
