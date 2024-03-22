import { ReactNode } from "react";

interface Props {
  text: string | ReactNode;
  onClick?: () => void;
  className: string;
  style?: any;
}

const Button = ({ text, onClick, className, style }: Props) => {
  return (
    <button style={style} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
