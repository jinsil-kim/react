const Header = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "150px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        src="https://i.namu.wiki/i/bgAOUw7mw4Z84QOz-49RCBSoqtMltdUwlO_xrTYvXIvq917lM4hXYq-oze2hiLhf8jgvCA2C-OVZ2fxraJ8b4A.svg"
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
      />
      <span className="text-2xl text-cyan-700">인천 미추홀구</span>
      <span className="text-2xl">대형폐기물</span>
    </div>
  );
};

export default Header;
