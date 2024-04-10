import { Button, LoginForm } from "../../components";
import { useAppDispatch, AppDispatch } from "../../store";
import { loginAccount } from "../../reducers/authReducer";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, Shop } from "../../assets";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, username: e.target.value });
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await dispatch(
        loginAccount({
          username: formData?.username,
          password: formData?.password,
        })
      );
      if (res.payload !== undefined) {
        navigate("/home");
      } else {
        alert("Failed to login");
      }
    } catch (error) {
      alert("Failed to login");
    }
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
              username={formData.username}
              password={formData.password}
              handleUsernameChange={handleUsernameChange}
              handlePasswordChange={handlePasswordChange}
            />
          </div>
          <div className="grid max-w-80 mt-6 lg:mb-6 sm:mx-auto mx-12">
            <Button
              text={"Login"}
              onClick={() => handleLogin()}
              className={
                "w-full px-2 py-3 outline-none border text-white font-bold bg-black border-black rounded-md"
              }
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
