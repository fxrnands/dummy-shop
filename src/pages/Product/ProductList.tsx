import { useState, useEffect } from "react";
import {
  Category,
  Input,
  ProductCard,
  SortBy,
  Button,
  Modal,
  LoginAlert,
} from "../../components";
import { options } from "../../utils/constant";
import { IoIosArrowDown } from "react-icons/io";
import {
  fetchProducts,
  filterProductByName,
} from "../../reducers/productReducer";
import { useAppDispatch, RootState, AppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { fetchCategories } from "../../reducers/categoryReducer";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const [isRotate, setIsRotate] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [loginAlert, setLoginAlert] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].option
  );

  const dispatch: AppDispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.productList);
  const categories = useSelector((state: RootState) => state.category);

  const handleClick = () => {
    dispatch(filterProductByName(value));
  };

  const resetFilter = () => {
    setValue("");
  };

  useEffect(() => {
    if (!value) {
      dispatch(
        fetchProducts({
          id: "",
          category:
            categories.category && categories?.category[selectedIndex - 1],
        })
      );
    }
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, value, selectedIndex]);

  const rotateStyle = isRotate
    ? { transform: "rotate(180deg)", transition: "transform 0.3s ease-in-out" }
    : { transform: "rotate(0deg)", transition: "transform 0.3s ease-in-out" };

  const handleSelectCategory = (selectedIndex: number) => {
    setSelectedIndex(selectedIndex);
  };

  const token = Cookies.get("token");

  const handleDetail = (id: number) => {
    if (token !== "undefined" && token) {
      navigate(`/product/${id}`);
    } else {
      setLoginAlert(true);
    }
  };

  return (
    <div className="max-w-5xl mt-6 mx-auto">
      <Category
        selectedIndex={selectedIndex}
        handleSelectCategory={handleSelectCategory}
        data={categories.category}
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
                id="productName"
                placeholder={"Search Product Name"}
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
                className={"border w-full rounded-md outline-none py-1 px-2"}
                type={"text"}
                name={"searchProductName"}
              />
              <div className="flex mt-3 lg:mb-4 mb-0 items-center justify-between gap-4">
                <Input
                  id="minPrice"
                  placeholder={"Minimum Price"}
                  className={"border rounded-md w-full py-1 px-2 outline-none"}
                  type={"text"}
                  name={"minPrice"}
                />
                <span className="text-gray-400"> - </span>
                <Input
                  id="maxPrice"
                  placeholder={"Maximum Price"}
                  className={"border rounded-md w-full py-1 px-2 outline-none "}
                  type={"text"}
                  name={"maxPrice"}
                />
              </div>
              <Button
                text={"APPLY"}
                onClick={handleClick}
                className={`w-full lg:w-28 lg:mt-0 mt-2 lg:mr-2 mr-0 border-gray-700 py-1.5 lg:py-2 text-sm bg-gray-700 font-semibold text-white rounded-md border`}
              />
              <Button
                onClick={resetFilter}
                text={"RESET FILTER"}
                className={`w-full lg:w-28 lg:mt-0 mt-2 border-black py-1.5 lg:py-2 text-sm font-semibold text-black rounded-md border`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex lg:px-0 px-4 justify-between">
        <div className="font-bold">
          {products?.productList?.length} products
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
        {products?.productList?.map((item) => (
          <div key={item.id} className="flex">
            <ProductCard data={item} onClick={() => handleDetail(item.id)} />
          </div>
        ))}
      </div>
      <Modal open={loginAlert} setOpen={setLoginAlert}>
        <LoginAlert />
      </Modal>
    </div>
  );
};

export default ProductList;
