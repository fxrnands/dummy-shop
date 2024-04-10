import { Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const LoginAlert = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="text-center">
          <Dialog.Title
            as="h3"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Login Alert !
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              To continue, please log in first.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 outline-none"
        >
          Go back to login page
        </button>
      </div>
    </>
  );
};

export default LoginAlert;
