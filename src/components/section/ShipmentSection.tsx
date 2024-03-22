interface Props {
  shipmentFrom: string;
  shippingFee: string;
  estimation: string;
}
const ShipmentSection = ({ shipmentFrom, shippingFee, estimation }: Props) => {
  return (
    <div className="py-3">
      <h1 className="font-bold text-lg">Shipping Information</h1>
      <div className="text-sm mt-3">
        <span>Shipping from </span>
        <span className="font-bold">{shipmentFrom}</span>
      </div>
      <div className="text-sm mt-1">
        <span>Shipping fee </span>
        <span className="font-bold">{shippingFee}</span>
      </div>
      <div className="text-[12px] text-gray-500">
        Estimation {estimation} days
      </div>
    </div>
  );
};

export default ShipmentSection;
