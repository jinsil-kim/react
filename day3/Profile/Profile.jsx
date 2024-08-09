import Profileimage from './Profileimage';
import Profileinfo from './Profileinfo';

const Profile = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <Profileimage src="data:image/jpeg;base64,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"></Profileimage>
      <Profileinfo name="엄태구" date="1983.11.09"></Profileinfo>
    </div>
  );
};

export default Profile;
