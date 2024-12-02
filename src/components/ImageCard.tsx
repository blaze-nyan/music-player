type ImageCard = {
  src: string;
  alt: string;
};
const ImageCard = ({ src, alt }: ImageCard) => {
  return (
    <div className="w-3/4 m-auto">
      <img src={src} alt={alt} width="100%" />
    </div>
  );
};

export default ImageCard;
