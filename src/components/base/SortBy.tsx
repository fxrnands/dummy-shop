interface Props {
  data: any[];
  defaultValue: string;
  selectedOption: any;
  setSelectedOption: any;
}

const SortBy = ({
  data,
  defaultValue,
  selectedOption,
  setSelectedOption,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <select
      id="location"
      name="location"
      className="block max-w-full outline-none rounded-md px-2 text-gray-900"
      value={selectedOption}
      onChange={handleChange}
      defaultValue={defaultValue}
    >
      {data.map((item, index) => (
        <option key={index}>{item.option}</option>
      ))}
    </select>
  );
};

export default SortBy;
