import { IoArrowUndoOutline } from "react-icons/io5";
import Button from "../base/Button";
import { FaStar } from "react-icons/fa6";

interface Props {
  productName: string | undefined;
  sold: number | undefined;
  stock: number | undefined;
  price: string | undefined;
}

const ProductInformation = ({ productName, sold, stock, price }: Props) => {
  return (
    <div>
      <p className="text-3xl hidden lg:grid font-bold">{productName}</p>
      <p className="font-bold lg:font-semibold lg:text-xl lg:mt-3 text-2xl">
        Rp{price}
      </p>
      <div className="flex justify-between items-center">
        <div className="mr-4 lg:mr-0">
          <p className="text-lg lg:hidden mt-2">{productName}</p>
          <div className="text-sm gap-2 flex items-center mt-2">
            <div className="flex items-center">
              <span className="mr-1">
                <FaStar />
              </span>
              {stock}
            </div>
            <div>|</div> <div>{sold} sold</div>
          </div>
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
