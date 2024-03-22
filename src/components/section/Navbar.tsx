import { Disclosure } from "@headlessui/react";
import Search from "./Search";
import Button from "../base/Button";
import { IoChevronBack } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const pathname = window.location.pathname;
  const splitPath = pathname.split("/");
  const productId = splitPath[splitPath.length - 1];

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      <>
        <div className="mx-auto max-w-5xl px-2 sm:px-4 lg:px-0">
          <div className={`h-14 flex items-center justify-between`}>
            {productId ? (
              <Button
                text={<IoChevronBack width={50} />}
                className="mx-2 cursor-pointer"
                onClick={handleBack}
              />
            ) : (
              <>
                <div className="flex px-2 lg:px-0">
                  <a
                    href="/"
                    className="flex cursor-pointer flex-shrink-0 items-center"
                  >
                    <img
                      className="h-10 w-32"
                      src="https://imgs.search.brave.com/0DyE2r5jfESQqkEbmt3TYtSEQ0Ufs-_48X79JmMFZ-0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzIwMDM5ODEucG5n"
                      alt="Your Company"
                    />
                  </a>
                </div>
              </>
            )}
            {productId && (
              <Button
                text={<FaShoppingCart width={50} />}
                className="mx-2 cursor-pointer"
              />
            )}
          </div>
        </div>
      </>
    </Disclosure>
  );
}
