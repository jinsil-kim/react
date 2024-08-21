const LikebyPeople = () => {
  const likePeople = ["dhodlfo", "jinsil", "lee", "kim", "jeon", "shin", "woo"];

  return !!likePeople ? (
    <span style={{ color: "262626" }}>
      <span className="font-semibold">{likePeople[0]}</span>님 외
      <span className="font-semibold"> {likePeople.length}명이 좋아합니다</span>
    </span>
  ) : (
    <span>No likes</span>
  );
};

export default LikebyPeople;
