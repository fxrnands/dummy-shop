interface Props {
  placeholder: string;
  className: string;
  type: string;
  value?: any;
  name: string;
  onChange?: any;
  id: string;
}
const Input = ({
  placeholder,
  className,
  name,
  type,
  value,
  onChange,
  id,
}: Props) => {
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
