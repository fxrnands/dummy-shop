import Button from "../base/Button";

interface Props {
  category: string | false;
  expand: boolean;
  handleShow: () => void;
}

const Description = ({ category, expand, handleShow }: Props) => {
  return (
    <div className="border-t-4 lg:border-t lg:border-b-0 border-b-4 border-b-gray-400 border-t-gray-400 mt-5">
      <div className="px-4 mt-4 mb-6">
        <p className="font-bold text-lg">Product Detail</p>
        <p className="mt-2 text-sm">
          <span className="text-gray-500">Category: </span>
          {category}
        </p>
        <p className="text-sm">
          <span className="text-gray-500">Condition: </span>New
        </p>
        <p className="mt-4 font-bold">Description</p>
        <p className={`${expand ? "" : "h-12 overflow-hidden"} mt-2`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod porro
          distinctio nisi architecto eligendi saepe quo sunt ut, facere mollitia
          doloribus quis iusto. Illum unde explicabo sequi atque dignissimos
          perspiciatis. Ipsam doloribus reprehenderit mollitia optio earum
          eveniet nulla, quia laboriosam.
        </p>
        <Button text={"More..."} onClick={handleShow} className={"font-bold"} />
      </div>
    </div>
  );
};

export default Description;
