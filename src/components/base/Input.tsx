interface Props {
  placeholder: string;
  className: string;
  type: string;
  value: string | number;
  name: string;
  onChange: any;
}
const Input = ({
  placeholder,
  className,
  name,
  type,
  value,
  onChange,
}: Props) => {
  return (
    <input
      id="search"
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
