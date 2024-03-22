import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface Props {
  placeholder: string;
  isMagnifyIcon: boolean;
}

const Search = ({ placeholder, isMagnifyIcon }: Props) => {
  return (
    <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
      <div className="w-full lg:max-w-xs">
        <div className="relative">
          {isMagnifyIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          )}
          <input
            id="search"
            name="search"
            className="block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-gray-900 border"
            placeholder={placeholder}
            type="search"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
