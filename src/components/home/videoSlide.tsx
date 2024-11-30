export const VideoSlide = () => {
  return (
    <div className="container mx-auto">
      {new Array(6).fill(null).map((_, index) => (
        <div key={index}>Slide {index}</div>
      ))}
    </div>
  );
};
