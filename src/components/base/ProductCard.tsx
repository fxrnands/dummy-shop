import { Product } from "../../utils/type";

interface Props {
  data: Product;
  detail: string;
}

const ProductCard = ({ data, detail }: Props) => {
  return (
    <a href={detail} className="cursor-pointer shadow-lg rounded-[8px]">
      <div className="p-2">
        <div className="flex items-center lg:w-[170px] lg:h-[170px] w-[105px] h-[105px] overflow-hidden">
          <img
            src={data.img}
            width={1000}
            height={1000}
            alt=""
            className="object-cover object-center rounded-[8px] h-full w-full"
          />
        </div>
        <p className="pt-2 h-12 text-[13px]">{data.productName}</p>
        <p className="font-bold">Rp{data.price.toLocaleString("ko-KR")}</p>
        <div className="text-[10px] text-gray-600 mt-1">
          Stock: {data.stock} | {data.sold} sold
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
