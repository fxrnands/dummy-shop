import { CategoryProduct } from "../../utils/type";

interface Props {
  data: CategoryProduct[];
  selectedIndex: number;
  handleSelectCategory: (index: number) => void;
}

const Category = ({ data, handleSelectCategory, selectedIndex }: Props) => {
  return (
    <div className="overflow-x-auto lg:mx-auto lg:max-w-5xl max-w-screen mx-4">
      <div className="flex gap-1.5">
        {data.map((item, index) => (
          <div
            key={index}
            className={`border cursor-pointer px-4 py-1 bg-white text-sm rounded-full whitespace-nowrap inline-block ${
              selectedIndex === index ? "border-black font-bold" : ""
            }`}
            onClick={() => handleSelectCategory(index)}
          >
            {item.categoryName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
