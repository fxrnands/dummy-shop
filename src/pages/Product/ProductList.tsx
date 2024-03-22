import { useState, useEffect } from "react";
import { products } from "../../utils/dummy";
import { Category, ProductCard, SortBy } from "../../components";
import { options } from "../../utils/constant";
import { Product } from "../../utils/type";

const ProductList = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [product, setProduct] = useState<Product[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].option
  );

  const handleSelectCategory = (index: number) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    if (selectedOption === "Highest Price") {
      const sortedProducts = products[selectedIndex].products
        .slice()
        .sort((a, b) => b.price - a.price);
      setProduct(sortedProducts);
    } else if (selectedOption === "Lowest Price") {
      const sortedProducts = products[selectedIndex].products
        .slice()
        .sort((a, b) => a.price - b.price);
      setProduct(sortedProducts);
    } else if (selectedOption === "Best Seller") {
      const sortedProducts = products[selectedIndex].products
        .slice()
        .sort((a, b) => b.sold - a.sold);
      setProduct(sortedProducts);
    } else if (selectedOption === "Name") {
      const sortedProducts = products[selectedIndex].products
        .slice()
        .sort((a, b) => {
          return a.productName.localeCompare(b.productName);
        });
      setProduct(sortedProducts);
    }
  }, [selectedIndex, selectedOption]);

  return (
    <div className="max-w-5xl mt-6 mx-auto">
      <Category
        data={products}
        selectedIndex={selectedIndex}
        handleSelectCategory={handleSelectCategory}
      />
      <div className="mt-8 flex lg:px-0 px-4 justify-between">
        <div className="font-bold">
          {products[selectedIndex].products.length} products
        </div>
        <div>
          <SortBy
            data={options}
            defaultValue={options[0].option}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>
      <div className="grid mt-3 lg:px-0 px-4 lg:grid-cols-5 grid-cols-3 gap-3">
        {product.map((item) => (
          <div key={item.id} className="flex">
            <ProductCard
              data={item}
              detail={`/product/${selectedIndex}/${item.id - 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
