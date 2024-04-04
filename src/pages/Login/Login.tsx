import { Button, LoginForm } from "../../components";
import { useAppDispatch, AppDispatch } from "../../store";
import { loginAccount } from "../../reducers/authReducer";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/home");
      console.log(res.payload);
    } catch (error) {
      alert("Failed to login");
    }
  };

  return (
    <div className="max-w-7xl grid mx-auto">
      <div className="mx-auto justify-center mt-32">
        <img
          className="h-20 w-60"
          src="https://imgs.search.brave.com/0DyE2r5jfESQqkEbmt3TYtSEQ0Ufs-_48X79JmMFZ-0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzIwMDM5ODEucG5n"
          alt="brand name"
        />
      </div>
      <h1 className="font-bold text-2xl my-4 text-center">Log In</h1>
      <LoginForm
        username={formData.username}
        password={formData.password}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
      />
      <div className="grid mt-8 max-w-80 mx-12">
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
  );
};

export default Login;
