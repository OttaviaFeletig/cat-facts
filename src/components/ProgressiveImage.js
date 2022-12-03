const ProgressiveImg = ({ src, fact, width, height }) => {
  return <img src={src} alt={fact || ""} width={width} height={height} />;
};
export default ProgressiveImg;
