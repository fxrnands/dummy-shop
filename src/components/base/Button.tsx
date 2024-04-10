import { ReactNode } from "react";

interface Props {
  text: string | ReactNode;
  onClick?: () => void;
  className: string;
  disabled?: boolean;
  style?: any;
}

const Button = ({ text, onClick, className, style, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      style={style}
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
