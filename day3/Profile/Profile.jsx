const Profile = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <Profileimage src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5027%2F2024%2F08%2F07%2F0000051628_002_20240807202415301.jpg&type=a340"></Profileimage>
      <Profileinfo name="엄태구" date="1983.11.09"></Profileinfo>
    </div>
  );
};

export default Profile;
