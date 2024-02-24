const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed()}%
      </p>
    </Html>
  );
};
//ok