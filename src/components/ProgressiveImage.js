const ProgressiveImg = ({ src, fact, width, height, style }) => {
  return (
    <img
      style={style}
      src={src}
      alt={fact || ""}
      width={width}
      height={height}
    />
  );
};
export default ProgressiveImg;
