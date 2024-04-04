import { FaStar } from "react-icons/fa6";

interface Props {
  data: any;
  detail: string;
}

const ProductCard = ({ data, detail }: Props) => {
  const isLargeScreen = window.innerWidth >= 768;
  const truncatedTitle = isLargeScreen
    ? data.title.slice(0, 40)
    : data.title.slice(0, 20);
  const displayTitle =
    data.title.length > (isLargeScreen ? 40 : 20)
      ? `${truncatedTitle}...`
      : truncatedTitle;

  return (
    <a
      href={detail}
      className="cursor-pointer border border-gray-100 shadow-lg rounded-[8px]"
    >
      <div className="p-2">
        <div className="flex items-center lg:w-[170px] lg:h-[170px] w-[105px] h-[105px] overflow-hidden">
          <img
            src={data.image}
            width={1000}
            height={1000}
            alt=""
            className="object-cover object-center rounded-[8px] h-full w-full"
          />
        </div>
        <p className="pt-2 h-12 text-[13px]">{displayTitle}</p>
        <p className="font-bold">Rp{data.price.toLocaleString("ko-KR")}</p>
        <div className="text-[10px] flex items-center gap-1 text-gray-600 mt-1">
          <div className="flex items-center">
            <p>
              <FaStar />
            </p>
            <p className="ml-1">{data.rating.rate}</p>
          </div>
          <div>|</div>
          <div>{data.rating.count} sold</div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
