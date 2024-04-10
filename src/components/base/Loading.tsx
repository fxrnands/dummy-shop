import { PropagateLoader } from "react-spinners";

interface Props {
  loading: boolean;
}

const LoadingSpinner = ({ loading }: Props) => {
  return (
    <div
      className={`${
        loading && "fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-20"
      } `}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        style={{ zIndex: 9999 }}
      >
        <PropagateLoader
          color="black"
          loading={loading}
          speedMultiplier={1.5}
          size={40}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
