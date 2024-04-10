import { Button, LoginForm } from "../../components";
import { useAppDispatch, AppDispatch } from "../../store";
import { loginAccount } from "../../reducers/authReducer";
import { useState, ChangeEvent } from "react";
import { Logo, Shop } from "../../assets";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { LoginFormType } from "../../utils/type";
import { BeatLoader } from "react-spinners";

const Login = () => {
  const [formData, setFormData] = useState<LoginFormType>({
    username: "",
    password: "",
  });
  const dispatch: AppDispatch = useAppDispatch();
  const { loading } = useSelector((state: RootState) => state.loading);
  const isEmptyForm = formData.username === "" || formData.password === "";

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, username: e.target.value });
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleLogin = () => {
    dispatch(
      loginAccount({
        username: formData?.username,
        password: formData?.password,
      })
    );
  };

  return (
    <div className="flex">
      <div className="w-1/2 hidden lg:flex justify-end">
        <img src={Shop} width={"650rem"} alt="shop-logo" />
      </div>
      <div className="lg:w-1/2 mt-12">
        <div className="w-full lg:max-w-sm lg:shadow-login-card max-w-full rounded-[8px] grid lg:mt-10 lg:flex lg:flex-col">
          <div className="mx-auto lg:mt-6 mt-32">
            <img className="h-20 w-60" src={Logo} alt="brand name" />
          </div>
          <h1 className="font-bold text-md my-4 text-center">
            Login into your account
          </h1>
          <div className="mx-12 sm:mx-auto w-80">
            <LoginForm
              username={formData?.username}
              password={formData?.password}
              handleUsernameChange={handleUsernameChange}
              handlePasswordChange={handlePasswordChange}
            />
          </div>
          <div className="grid max-w-80 mt-6 lg:mb-6 sm:mx-auto mx-12">
            <Button
              disabled={isEmptyForm}
              text={loading ? <BeatLoader size={14} color="white" /> : "Login"}
              onClick={() => handleLogin()}
              className={`w-full px-2 py-3 outline-none border ${
                isEmptyForm ? "cursor-not-allowed" : "cursor-pointer"
              } text-white font-bold ${
                loading
                  ? "cursor-not-allowed bg-gray-600 border-gray-600"
                  : "cursor-pointer bg-black border-black"
              }  rounded-md`}
            />
            <Button
              text={"Guess Mode"}
              onClick={() => (window.location.href = "/home")}
              className={
                "w-full px-2 py-3 outline-none cursor-pointer border mt-3 text-black font-bold bg-white border-black rounded-md"
              }
            />
            <p className="text-sm mt-8">
              Need an account? Please check on{" "}
              <a
                href="https://github.com/fxrnands/dummy-shop/blob/main/README.md"
                className="font-bold underline"
              >
                README.md
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
