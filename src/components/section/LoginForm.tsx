import Input from "../base/Input";

interface Props {
  username: string;
  password: string;
  handleUsernameChange: (e: any) => void;
  handlePasswordChange: (e: any) => void;
}

const LoginForm = ({ username, password, handleUsernameChange, handlePasswordChange }: Props) => {
  return (
    <div className="space-y-4">
      <div>
        <p className="font-semibold">Username</p>
        <Input
          id="username"
          placeholder={""}
          className={
            "w-full px-2 py-2 mt-1 outline-none border border-black rounded-md"
          }
          type={"text"}
          value={username}
          onChange={handleUsernameChange}
          name={"username"}
        />
      </div>
      <div>
        <p className="font-semibold">Password</p>
        <Input
          id="password"
          placeholder={""}
          className={
            "w-full px-2 mt-1 py-2 outline-none border border-black rounded-md"
          }
          type={"password"}
          value={password}
          onChange={handlePasswordChange}
          name={"password"}
        />
      </div>
    </div>
  );
};

export default LoginForm;
