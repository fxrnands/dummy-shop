import Button from "../base/Button";
import { MdArrowForwardIos } from "react-icons/md";

interface Props {
  shopName: string;
  location: string;
}

export default function SellerInformation({ shopName, location }: Props) {
  return (
    <div className="bg-white border-b border-t border-gray-100 rounded-lg">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <div className="w-14 border rounded-full h-14">
              <img
                src="https://imgs.search.brave.com/I8-5s0_lmEVnNLbUyELxYGo_cDnNefsRSdNeNPXkpsk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zMC0z/MDc0MTZfcHJvZmls/ZS1pY29uLXBuZy1p/bWFnZS1mcmVlLWRv/d25sb2FkLXNlYXJj/aHBuZy1lbXBsb3ll/ZS5wbmc"
                alt=""
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                {shopName}
              </h3>
              <div className="mt-1 max-w-xl text-sm text-gray-500">
                {location}
              </div>
            </div>
          </div>
          <div className="">
            <Button
              text={<MdArrowForwardIos className="w-6 h-6" />}
              className="items-center rounded-md text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
