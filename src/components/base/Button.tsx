import { ReactNode } from "react";

interface Props {
  text: string | ReactNode;
  onClick?: () => void;
  className: string;
}

const Button = ({ text, onClick, className }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
