import { Disclosure } from "@headlessui/react";
import Button from "../base/Button";
import { IoChevronBack } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Logo } from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Navbar() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  const splitPath = pathname.split("/");
  const productId = splitPath[splitPath.length - 1];
  const { pathname: location } = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  const token = Cookies.get("token");

  return (
    <Disclosure
      as="nav"
      className={`${location === "/" ? "hidden" : ""} bg-white shadow`}
    >
      <>
        <div className="mx-auto max-w-5xl px-2 lg:px-0">
          <div className={`h-14 flex items-center justify-between`}>
            {productId !== "home" ? (
              <Button
                text={<IoChevronBack className="w-8 h-8" />}
                className="mx-2 cursor-pointer"
                onClick={handleBack}
              />
            ) : (
              <>
                <div className="flex px-2 lg:px-0">
                  <a
                    href="/home"
                    className="flex cursor-pointer flex-shrink-0 items-center"
                  >
                    <img
                      className="h-10 -ml-2 w-32"
                      src={Logo}
                      alt="brand name"
                    />
                  </a>
                </div>
              </>
            )}
            {token && (
              <Button
                text={<FaShoppingCart className="w-6 h-6" />}
                className="mx-2 cursor-pointer"
              />
            )}
          </div>
        </div>
      </>
    </Disclosure>
  );
}
