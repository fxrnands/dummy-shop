interface Props {
  image: string | undefined;
}

const ProductImage = ({ image }: Props) => {
  return (
    <div
      className="flex items-center overflow-hidden w-full lg:h-[40rem] h-[20rem]"
      style={{ position: "relative", display: "inline-block" }}
    >
      <img src={image} alt="" className="object-cover w-full h-full" />
      <div
        className="border border-black bg-black rounded-full px-2"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "5px",
          color: "white",
        }}
      >
        1 / 1
      </div>
    </div>
  );
};

export default ProductImage;
