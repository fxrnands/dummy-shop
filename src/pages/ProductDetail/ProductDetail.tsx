import { useParams } from "react-router-dom";
import { products } from "../../utils/dummy";
import { useState } from "react";
import {
  Button,
  DescriptionSection,
  ProductImage,
  ProductInformation,
  SellerInformation,
  ShipmentSection,
} from "../../components";
import { IoArrowUndoOutline } from "react-icons/io5";

const ProductDetail = () => {
  const { productId, categoryId } = useParams();
  const [showMore, setShowMore] = useState<boolean>(false);
  const categoryIdNumber = categoryId ? parseInt(categoryId) : undefined;
  const productIdNumber = productId ? parseInt(productId) : undefined;
  const product =
    categoryIdNumber !== undefined && productIdNumber !== undefined
      ? products[categoryIdNumber].products[productIdNumber]
      : undefined;

  const handleShow = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="lg:flex lg:border-b-2 pb-4 grid lg:gap-4 max-w-5xl mx-auto lg:mt-8">
      <ProductImage image={product?.img} />
      <div className="grid lg:w-[80%]">
        <div className="px-4 lg:mt-0 mt-4">
          <ProductInformation
            productName={product?.productName}
            sold={product?.sold}
            stock={product?.stock}
            price={product?.price}
          />
        </div>
        <DescriptionSection
          category={
            categoryIdNumber !== undefined &&
            products[categoryIdNumber]?.categoryName
          }
          expand={showMore}
          handleShow={handleShow}
        />
        <div className="">
          <SellerInformation shopName={"Dummy Shop"} location={"Jakarta, ID"} />
        </div>
        <div className="mb-3 border-b px-4">
          <ShipmentSection
            shipmentFrom={"Bekasi"}
            shippingFee={"Rp10.000"}
            estimation={"3 - 4"}
          />
        </div>
        <div className="flex lg:gap-0 gap-4 px-4 lg:px-0 justify-between">
          <Button
            text={"Buy Now"}
            className={
              "w-28 border-gray-700 py-2 hidden lg:grid bg-gray-700 font-bold text-white rounded-md border"
            }
          />
          <Button
            text={"Add to Cart"}
            className={"lg:w-36 w-full border-black py-2 rounded-md border"}
          />
          <Button
            text={"Add to Wishlist"}
            className={"lg:w-40 w-full rounded-md py-2 border-black border"}
          />
        </div>
        <div className="w-full px-4">
          <Button
            text={"Buy Now"}
            className={
              "w-full border-gray-700 py-2 lg:hidden mt-4 grid bg-gray-700 font-bold text-white rounded-md border"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
