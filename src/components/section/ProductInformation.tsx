import { IoArrowUndoOutline } from "react-icons/io5";
import Button from "../base/Button";

interface Props {
  productName: string | undefined;
  sold: number | undefined;
  stock: number | undefined;
  price: number | undefined;
}

const ProductInformation = ({ productName, sold, stock, price }: Props) => {
  return (
    <div>
      <p className="text-3xl hidden lg:grid font-bold">{productName}</p>
      <p className="font-bold lg:font-semibold lg:text-xl lg:mt-3 text-2xl">
        Rp{price?.toLocaleString("ko-KR")}
      </p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg lg:hidden mt-2">{productName}</p>
          <p className="text-sm mt-2">
            Stock: {stock} pcs | {sold} sold
          </p>
        </div>
        <Button
          text={<IoArrowUndoOutline className="w-6 h-6" />}
          className=""
        />
      </div>
    </div>
  );
};

export default ProductInformation;
