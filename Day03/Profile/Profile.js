import Profileimage from "./Profileimage";
import Profileinfo from "./Profileinfo";

const Profile = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Profileimage src="https://th.bing.com/th/id/OIP.Nuh-lVppUlvAL8pTvSlwWQHaJQ?w=115&h=184&c=7&r=0&o=5&pid=1.7"></Profileimage>
      <Profileinfo name="예준" date="2001.09.12"></Profileinfo>
    </div>
  );
};

export default Profile;
