import { useState, useEffect } from "react";
import { products } from "../../utils/dummy";
import { Category, Input, ProductCard, SortBy, Button } from "../../components";
import { options } from "../../utils/constant";
import { FilterType, Product } from "../../utils/type";
import { IoIosArrowDown } from "react-icons/io";

const ProductList = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [product, setProduct] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isRotate, setIsRotate] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterType>({
    searchProductName: "",
    minPrice: "",
    maxPrice: "",
  });
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].option
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "minPrice" || name === "maxPrice") {
      const regex = /^[0-9\b]+$/;
      if (value === "" || regex.test(value)) {
        setFilter((prevFilter) => ({
          ...prevFilter,
          [name]: value,
        }));
      }
    } else {
      setFilter((prevFilter) => ({
        ...prevFilter,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (
      filter.searchProductName === "" &&
      filter.minPrice === "" &&
      filter.maxPrice === ""
    ) {
      setFilteredProducts(product);
    }
  }, [filter.maxPrice, filter.minPrice, filter.searchProductName, product]);

  const rotateStyle = isRotate
    ? { transform: "rotate(180deg)", transition: "transform 0.5s ease-in-out" }
    : { transform: "rotate(0deg)", transition: "transform 0.5s ease-in-out" };

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
    } else if (selectedOption === "Lowest Stock") {
      const sortedProducts = products[selectedIndex].products
        .slice()
        .sort((a, b) => a.stock - b.stock);
      setProduct(sortedProducts);
    } else if (selectedOption === "Highest Stock") {
      const sortedProducts = products[selectedIndex].products
        .slice()
        .sort((a, b) => b.stock - a.stock);
      setProduct(sortedProducts);
    }
  }, [selectedIndex, selectedOption]);

  const handleApplyFilter = () => {
    const filtered = product.filter((item) => {
      const lowerCaseProductName = item.productName.toLowerCase();
      const lowerCaseSearchProductName = filter.searchProductName.toLowerCase();
      const isInSearchProductName = lowerCaseProductName.includes(
        lowerCaseSearchProductName
      );

      const minPrice = parseFloat(filter.minPrice);
      const maxPrice = parseFloat(filter.maxPrice);

      const isInRange =
        (isNaN(minPrice) || item.price >= minPrice) &&
        (isNaN(maxPrice) || item.price <= maxPrice);

      return isInSearchProductName && isInRange;
    });

    setFilteredProducts(filtered);
  };

  const handleResetFilter = () => {
    setFilter({
      searchProductName: "",
      minPrice: "",
      maxPrice: "",
    });
    setFilteredProducts(product);
  };

  return (
    <div className="max-w-5xl mt-6 mx-auto">
      <Category
        data={products}
        selectedIndex={selectedIndex}
        handleSelectCategory={handleSelectCategory}
      />
      <div className="lg:px-0 px-4">
        <div
          className={`mt-4 ${
            !isRotate ? "" : "pb-4"
          } grid px-4 rounded-lg shadow-sm border py-2`}
        >
          <div
            className={`${
              !isRotate ? "" : "mb-4"
            } flex items-center justify-between`}
          >
            <h1 className="font-bold">Filter Products</h1>
            <Button
              onClick={() => setIsRotate(!isRotate)}
              text={<IoIosArrowDown />}
              style={rotateStyle}
              className=""
            />
          </div>
          <div
            className={`grid overflow-hidden transition-all ease-in-out duration-300 ${
              isRotate ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <Input
                placeholder={"Search Product Name"}
                className={"border w-full rounded-md outline-none py-1 px-2"}
                type={"text"}
                value={filter.searchProductName}
                onChange={handleChange}
                name={"searchProductName"}
              />
              <div className="flex mt-3 lg:mb-4 mb-0 items-center justify-between gap-4">
                <Input
                  placeholder={"Minimum Price"}
                  className={"border rounded-md w-full py-1 px-2 outline-none "}
                  type={"text"}
                  value={filter.minPrice}
                  onChange={handleChange}
                  name={"minPrice"}
                />
                <span className="text-gray-400"> - </span>
                <Input
                  placeholder={"Maximum Price"}
                  className={"border rounded-md w-full py-1 px-2 outline-none "}
                  type={"text"}
                  value={filter.maxPrice}
                  onChange={handleChange}
                  name={"maxPrice"}
                />
              </div>
              <Button
                text={"APPLY"}
                onClick={handleApplyFilter}
                className={`w-full lg:w-28 lg:mt-0 mt-2 lg:mr-2 mr-0 border-gray-700 py-1.5 lg:py-2 text-sm bg-gray-700 font-semibold text-white rounded-md border`}
              />
              <Button
                text={"RESET FILTER"}
                onClick={handleResetFilter}
                className={`w-full lg:w-28 lg:mt-0 mt-2 border-black py-1.5 lg:py-2 text-sm font-semibold text-black rounded-md border`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex lg:px-0 px-4 justify-between">
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
        {filteredProducts.map((item) => (
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
